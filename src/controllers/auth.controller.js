import userModel from "../models/user.model.js";
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        if(!name || !email || !password){
            return res.status(400).json({ message: "All fields are required" });
        }   
        const isExist = await userModel.findOne({email});
        if(isExist){
            return res.status(400).json({ message: "Email already exists" , status:"failed"});
        }

        const user= await userModel.create({ name, email, password });

        const token = jwt.sign ({userId : user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});

    
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production'});


            return res.status(201).json({ message: "User registered successfully", user:{userId: user._id,name:user.name,email:user.email}, token, status:"success" });
        
    } catch (error) {
        res.status(500).json({ message: "Internal server error", status:"failed", error: error.message });
    }
}

export const login = (req, res) => {
    res.send('User login endpoint');
}

export const logout = (req, res) => {
    res.send('User logout endpoint');
}
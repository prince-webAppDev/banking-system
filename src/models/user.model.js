import { match } from 'assert';
import mongoose from 'mongoose';
import { type } from 'os';

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: [   true, "Email already exists"],
        trim:true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address.']
    },
    name:{
        type: String,
        required: [true, "Name is required"],
        
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"]
    }
})
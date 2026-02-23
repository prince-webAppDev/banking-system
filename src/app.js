import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';





//Imported Routes 
import authRoutes from './routes/auth.route.js';
import accountRoutes from './routes/acount.route.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());


// routes 
app.use("/api/auth", authRoutes);
app.use("/api/account", accountRoutes);




app.get('/', (req, res) => {
    res.send("hello world")
})





export default app;
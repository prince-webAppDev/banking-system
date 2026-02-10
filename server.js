import app from './src/app.js';
import { connectDB } from './src/configs/db.js';







const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connectDB();    
});
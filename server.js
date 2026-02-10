import app from './src/app.js';
import { connectDB } from './src/configs/db.js';





app.get('/', (req, res) => {
    res.send('Welcome to the Banking System API');
}
)
app.get('/one', (req, res) => {
    res.send('Welcome to the Banking System API');
}
)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connectDB();    
});
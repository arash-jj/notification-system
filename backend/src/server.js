import app from './app.js';
import { PORT } from './config/env.js';
import connectDB from "./database/mongoDB.js"


const runServer = () => {
    try {
        app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))
        connectDB()
    } catch (error) {
        console.log(error);
    }
}

runServer()
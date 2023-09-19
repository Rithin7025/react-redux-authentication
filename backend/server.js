import express from 'express';
const app = express();
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js'
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use('/api/users', userRoutes)

app.get('/',(req,res)=>{
    res.send('Server is Launched')
})

app.use(notFound)
app.use(errorHandler)
app.listen(PORT,()=>{
    console.log(`server launched on port ${PORT}`)
})




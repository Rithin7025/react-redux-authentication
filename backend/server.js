import express from 'express';
import path from 'path'
const app = express();
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import cors from 'cors'

import cookieParser from 'cookie-parser';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js'
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors({orgin:"http://localhost:3000",credentials:true}))
app.use(express.static('backend/public'))

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use('/api/users', userRoutes)
app.use('/api/admin',adminRoutes)

app.get('/',(req,res)=>{
    res.send('Server is Launched')
})

app.use(notFound)
app.use(errorHandler)
app.listen(PORT,()=>{
    console.log(`server launched on port ${PORT}`)
})





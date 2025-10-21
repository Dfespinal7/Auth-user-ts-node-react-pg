import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { userRoute } from './routes/users.routes.js';
dotenv.config(); // 
const app=express()
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(userRoute)

app.listen(process.env.PORT,()=>{
    console.log(`server ${process.env.PORT} is  running`)
})
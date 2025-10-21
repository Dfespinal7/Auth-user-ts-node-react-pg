import {Router} from 'express'
import { getAllUsers, index, login, logout, register } from '../controllers/users.controller.js'
import { authTokenValidate } from '../middlewares/auth.middleware.js'

export const userRoute=Router()

userRoute.get('/',getAllUsers)
userRoute.post('/register',register)
userRoute.post('/logout',logout)
userRoute.post('/login',login)
userRoute.get('/index',authTokenValidate,index)
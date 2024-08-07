import { Router } from "express"
import * as authController from './auth.controller.js'



const app= Router()
//register
app.post('/register', authController.Register);

// login
app.post('/login', authController.Login)

export default app;
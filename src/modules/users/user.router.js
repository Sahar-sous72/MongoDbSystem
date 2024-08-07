import { Router } from "express"
import * as userController from './user.controller.js'



const app= Router()
//find all user
app.get('/',userController.getAllUsers);
app.post('/:id',userController.getUser);
app.put('/:id',userController.updateUser);
app.delete('/:id',userController.deleteUser);



export default app;
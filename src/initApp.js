import connectDb from "../Db/connection.js/"
import authRouter from "./modules/auth/auth.router.js"
import userRouter from "./modules/users/user.router.js"


const initApp=(app,express)=>{
    app.use(express.json());
    connectDb();
    app.use('/auth',authRouter);
    app.use('/users',userRouter)

}

export default initApp;
import userModel from "../../../Db/models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

//register
export const Register = async(req,res)=>{
    try{
    const {email,password,name,age} =req.body;
    var hashPassword= await bcrypt.hashSync(password,parseInt(process.env.SALTROUND));
   // create
   // const user = await userModel.create({email,password:hashPassword,age,userName:name});

   //new userModel
   const user = new userModel({email,password:hashPassword,age,userName:name});
   await user.save();

    return res.status(200).json({message:"success",user})
    }catch(err){
        return res.status(500).json({message:"catch error",terte:err.stack})
    }
};

//login
export const Login = async(req,res)=>{
    const{email,password}=req.body;

    const user =await userModel.findOne({email});
    if(!user){
        return res.status(404).json({message:"email not found !"});
    }
    const check =await bcrypt.compare(password,user.password);
    if(!check){
        return res.status(401).json({message:"invalid password !"});
    }
    const token = await jwt.sign({id:user._id},'LoginSig123');
    return res.status(200).json({message:"success",token});

}
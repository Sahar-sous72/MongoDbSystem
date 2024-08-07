import userModel from "../../../Db/models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

//get all user 
export const getAllUsers=async(req,res)=>{
    try{

        const user = await userModel.find();
        return res.status(201).json({message:"sucess",user})

    }catch(err){
        return res.status(500).json({message:"catch error",err})
    }
}

//get user by id
export const getUser =async(req,res)=>{

    try{
        const {id}=req.params;

        //const user = await userModel.findOne({_id:id});
        const user =await userModel.findById({_id:id})

        return res.status(201).json({message:"success",user});
    }catch(err){
        return res.status(500).json({message:"catch error",err})  
      }
}

//update email for user by id 

export const updateUser =async(req,res)=>{

    const {id}=req.params;
    const{email}=req.body;

    const user =  await userModel.findByIdAndUpdate({_id:id},{email:email},{new:true});
    /*if(!user.modifiedCount> 0){
        return res.status(500).json({message:"user not found"})
    }*/
    return res.status(201).json({message:"success",user})

}

export const deleteUser =async(req,res)=>{
    const{id}=req.params;
    const user = await userModel.findOneAndDelete({_id:id});
    return res.status(201).json({message:"success",user})

}
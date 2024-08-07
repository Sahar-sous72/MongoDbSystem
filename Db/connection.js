import mongoose from'mongoose';
const connectDb =()=> {
    return mongoose.connect(process.env.DbConnection).then(result=>{
        console.log("db connection  established")
    }).catch(err=>{
        console.log(`error connect to db : ${err}`)
    });
  
  }

  export default connectDb
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB=async ()=>{
  try{
    const k=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    //check what is displayed
    console.log(`DB is connected !! To DB Host:${k.connection.host}`);
    //as there are diffrent types of host the log of this host tells us which host is being used
  }
  catch(e){
    console.log("Error",e);
    process.exit(1)
    // read about process & it's various usecases
  }
}

export default connectDB

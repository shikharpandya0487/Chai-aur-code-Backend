import dotenv from 'dotenv'
import connectDB from "./dataBase/index.js";
import { app } from './app.js';

dotenv.config(   
    {
      path:'./env'
    }
  
)   
connectDB() //since this is an asynchronous function it returns a promise
.then(
    app.listen(process.env.PORT||8000,()=>{
        console.log(`listening on the port ${process.env.PORT}`);
    }),
    app.on("error",(error)=>{
        console.log("Error while connecting express",error);
    })
)
.catch((e)=>{
    console.log("Error connecting to MONGODB ",e);
})

/*
//Using IIFE
;(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       
       app.on("error",(error)=>{
        console.log("Express not able to connect",error);
       })
        
       app.listen(process.env.PORT,()=>{
        console.log(`Express is listening on ${process.env.PORT}`);
       })
    } catch (error) {
        console.log("Error",error);
        throw error
    } 
})()
*/

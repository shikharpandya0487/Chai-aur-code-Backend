import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//Direct encyption is not possible so we have to take help of mongoose's hooks


const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String, //we will store images on cloudinary
        required:true,
    },
    coverImage:{
        type:String //cloudinary url
    },
    watchHistory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video"
        }],
     password:{
        type:String,
        required:[true,"Password is required"]
     },
     refreshTokens:{
        type:String
     }

     
},{
    timestamps:true
})

userSchema.pre("save",async function(next){
    if(!this.password.isModified("password"))
    return next()

    this.password=bcrypt.hash(this.password,8) //second parameter is number of rounds of alogorithm running
    next()
})

userSchema.methods.isPasswordCorrect=async function(password)
{
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=function(){
   jwt.sign(
    {
        _id:this._id,
        email:this.email,
        username:this.username,
        fullName:this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }

   )
}
//refresh Token has only limited data 
userSchema.methods.generateRefreshToken=function(){
    jwt.sign(
        {
            _id:this._id,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    
       )
}


export const User=new mongoose.model("User",userSchema)
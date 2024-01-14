import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema=new mongoose.Schema({
    videoFile:{
        type:String,//cloudinary url
        required:true 
    },
    thumbnail:{
        type:String,
        required:true 
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true 
    },
    duration:{
        type:Number,//coudinary url
        required:true 
    },
    views:{
        type:Number,
        default:0 
    },
    isPublished:{
        type:Boolean,
        default:true 
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    } 
},{timestamps:true})


//Aggregate needs to be used before exporting

//It needs to be used as a plugin
videoSchema.plugin(mongooseAggregatePaginate)
//Now we can write aggregation queries


export const Video=new mongoose.model("Video",videoSchema)
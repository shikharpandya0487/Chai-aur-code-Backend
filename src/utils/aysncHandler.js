// function a(){

// } 
// This is equal to ()=>{

// }
// function a( b )
// {
//     function c(b)
//     {

//     }
// }

//  const k=(fn)={()=>{}}



const aysncHandler=(fn)=>async (req,res,next)=>{
    try {
        await fn(req,res,next)
    } catch (error) {
        //send the response as status
        res.status(err.code||500).json({
            success:false,
            mesages:err.mesages
        })
    }
}

export {aysncHandler}
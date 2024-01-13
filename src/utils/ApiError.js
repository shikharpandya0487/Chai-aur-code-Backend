class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack=""
    ){
         super(message)
         this.statusCode=statusCode
         this.data=null
         this.success=false
         //here the success is equaled to false because we are not handling the response here 
         //We are concerned about the handling of error where ever this success flag will go it will be updated
         //by the necessary func
         this.errors=errors

         if(stack)
         {

         }
         else
         {
            
         }
 
         
    }
}
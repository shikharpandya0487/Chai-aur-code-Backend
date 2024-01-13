class ApiResponse{
  constructor(
    statusCode,
    message="Success",
    data
  ){
    this.statusCode=statusCode
    this.data=data
    this.message=message
    this.success=statusCode<400
    //there are different status code set for different purposes
    // do visit the site 
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

  }
}

export {ApiResponse}
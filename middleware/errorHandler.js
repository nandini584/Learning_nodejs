const {constants}=require('../constants')
const errorHandler=(err, req,res,next)=>{
    const statusCode=res.statusCode? res.statusCode:500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation failed",
                message:err.message,
                stackTrace:err.stack
            });
            
            break;
        case constants.UNAUTHORISED:
            res.json({
                title:"user unauthorised",
                message:err.message,
                stackTrace:err.stack
            });
            
            break;
        case constants.FORBIDDEN:
            res.json({
                title:"forbidden",
                message:err.message,
                stackTrace:err.stack
            });
            
            break;
        case constants.NOT_FOUND:
            res.json({
                title:"not found",
                message:err.message,
                stackTrace:err.stack
            });
            
            break;
        case constants.SERVER_ERROR:
            res.json({
                title:"server failed",
                message:err.message,
                stackTrace:err.stack
            });
            
            break;
    
        default:
            console.log("no error here all okay")
            break;
    }
    res.json({title:"Not Found",message:err.message , stackTrace: err.stack})
    res.json({title:"Validation Failed",message:err.message , stackTrace: err.stack})
}
module.exports=errorHandler
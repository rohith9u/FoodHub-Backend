export function errorHandler(err,req,res,next){
    if(err.name==='ValidationError'){
        return res.status(400).json({
            success:false,
            message:err.message
        })
    }
    if(err.name==='CastError'){
        return res.status(400).json({
            success:false,
            message:'Invalid ObjectId...'
        })
    }
    if(err.code===11000){
        return res.status(409).json({
            success:false,
            message:'Duplicate data found...'
        })
    }
    console.log(err)
    return res.status(500).json({success:false,
            message:'Internal Server Down...'})
}
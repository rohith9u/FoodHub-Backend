import mongoose from 'mongoose'
const reviewSchema=await mongoose.Schema({
    'comment':{
        type:String,
        maxlength:300,
        trim:true,
    },
    'rating':{
        type:Number,
        min:0,
        max:5,
        default:0
    },
    'restaurantId':{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Restaurant'
    },
    'createdAt':{
        type:Date,
        default:Date.now
    },
    'isDeleted':{
        type:Boolean,
        default:false
    }
})
export const Review=mongoose.model('Review',reviewSchema)
import mongoose from 'mongoose'
const categorySchema=mongoose.Schema({
    "name":{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    "isDeleted":{
        type:Boolean,
        default:false
    }
})
export const Category=mongoose.model('Category',categorySchema)
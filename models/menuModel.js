import mongoose from 'mongoose'
const menuSchema=mongoose.Schema({
    'name':{
        type:String,
        required:true,
        trim:true
    },
    'description':{
        type:String,
        maxLength:100,
        trim:true
    },
    'price':{
        type:Number,
        min:0,
        required:true
    },
    'availability':{
        type:String,
        enum:['Available','Not Available'],
        required:true
    },
    'restaurantId':{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Restaurant'
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})
export const Menu=mongoose.model('Menu',menuSchema)
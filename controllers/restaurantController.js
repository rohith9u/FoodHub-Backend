import { Restaurant } from "../models/restaurantModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { filterBuilder } from "../utils/filterBuilder.js";
import { pagination } from "../utils/pagination.js";
import { sortBuilder } from "../utils/sortBuilder.js";
export const createRestaurant=asyncHandler(async(req,res,next)=>{
    const restaurant=await Restaurant.create(req.body)
    res.status(201).json({
        success:true,
        message:'Restaurant Created',
        data:restaurant
    })
})
export const updateRestaurant=asyncHandler(async(req,res,next)=>{
    const update={}
    if(req.body.name!==undefined){
        update.name=req.body.name
    }
    if(req.body.city!==undefined){
        update.city=req.body.city
    }
    if(req.body.description!==undefined){
        update.description=req.body.description
    }
    if(req.body.cuisines){
        update.$addToSet = {
    cuisines: {
        $each: Array.isArray(req.body.cuisines)?req.body.cuisines:[req.body.cuisines]
    }
}
    }
    if(req.body.isVeg!==undefined){
        update.isVeg=req.body.isVeg
    }
    const restaurant=await Restaurant.findOneAndUpdate({_id:req.params.id,isDeleted:false},update,{returnDocument:'after',runValidators:true})
    if(!restaurant){
        return res.status(404).json({
        success:false,
        message:'Restaurant Not Found',
    })
    }
    res.status(200).json({
        success:true,
        message:'Restaurant Updated',
        data:restaurant
    })
})
export const getRestaurant=asyncHandler(async(req,res,next)=>{
    const filter=filterBuilder(req.query)
    const sort=sortBuilder(req.query)
    const {skip,limit}=pagination(req.query)
    const restaurant=await Restaurant.find(filter).sort(sort).skip(skip).limit(limit)
    if(restaurant.length===0){
        return res.status(404).json({
        success:false,
        message:'Restaurants Not Found',
        })
    }
    res.status(200).json({
        success:true,
        message:'Restarants Found',
        data:restaurant
    })
})
export const getRestaurantById=asyncHandler(async(req,res,next)=>{
    const restaurant=await Restaurant.findOne({_id:req.params.id,isDeleted:false})
    if(!restaurant){
        return res.status(404).json({
            success:false,
            message:'Restaurant Not Found'
        })
    }
    res.status(200).json({
        success:true,
        message:'Restaurant Found',
        data:restaurant
    })
})
export const deleteRestaurant=asyncHandler(async(req,res,next)=>{
    const restaurant=await Restaurant.findOneAndUpdate({_id:req.params.id,isDeleted:false},{isDeleted:true},{runValidators:true,returnDocument:'after'})
    if(!restaurant){
        return res.status(404).json({
            success:false,
            message:'Restaurant Not Found'
        })
    }
    res.status(200).json({
        success:true,
        message:'Restaurant Found',
        data:restaurant
    })
})
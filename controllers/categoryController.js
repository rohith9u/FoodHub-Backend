import { Category } from "../models/categoryModel.js";
import { Restaurant } from "../models/restaurantModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
export const createCategory=asyncHandler(async(req,res,next)=>{
    const category=await Category.create(req.body)
    res.status(201).json({
        success:true,
        message:'Category Created',
        data:category
    })
})
export const getCategoryById=asyncHandler(async(req,res,next)=>{
    const category=await Category.findOne({_id:req.params.id,isDeleted:false})
    if(!category){
        return res.status(404).json({
            success:false,
            message:'Not Found'
        })
    }
    res.status(200).json({
        success:true,
        message:'Categories Found',
        data:category
    })
})
export const getCategory=asyncHandler(async(req,res,next)=>{
    const category=await Category.find({isDeleted:false})
    if(category.length===0){
        return res.status(404).json({
            success:false,
            message:'Not Found'
        })
    }
    res.status(200).json({
        success:true,
        message:'Categories Found',
        data:category
    })
})
export const updateCategory=asyncHandler(async(req,res,next)=>{
    const update={}
    if(req.body.name!==undefined){
        update.name=req.body.name
    }
    const category=await Category.findOneAndUpdate({_id:req.params.id,isDeleted:false},update,{returnDocument:'after',runValidators:true})
    if(!category){
        return res.status(404).json({
            success:false,
            message:'Not found'
        })
    }
    res.status(200).json({
        success:true,
        message:'Categories Updated',
        data:category
    })
})
export const deleteCategory=asyncHandler(async(req,res,next)=>{
    const category=await Category.findOneAndUpdate({_id:req.params.id,isDeleted:false},{isDeleted:true},{returnDocument:'after',runValidators:true})
    if(!category){
        return res.status(404).json({
            success:false,
            message:'Not found'
        })
    }
    res.status(200).json({
        success:true,
        message:'Categories Updated',
        data:category
    })
})
export const getRestaurantbyCategory=asyncHandler(async(req,res,next)=>{
    const category=await Category.findOne({name:req.params.name,isDeleted:false})
    if(!category){
        return res.status(404).json({
            success:false,
            message:'Not found'
        })
    }
    const restaurants=await Restaurant.find({categoryId: category._id,isDeleted:false})
    if(restaurants.length===0){
        return res.status(404).json({success:false,
            message:'Restaurant Not Found'
        })
    }
    res.status(200).json({
        success:true,
        message:'Restaurant Found',
        data:restaurants
    })
})
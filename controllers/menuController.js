import { Menu } from "../models/menuModel.js";
import { Restaurant } from "../models/restaurantModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { filterBuilder } from "../utils/filterBuilder.js";
import { pagination } from "../utils/pagination.js";
import { sortBuilder } from "../utils/sortBuilder.js";
export const createMenu=asyncHandler(async(req,res,next)=>{
    let restaurant=await Restaurant.findOne({_id:req.body.restaurantId,isDeleted:false})
    if(!restaurant){
        return res.status(404).json({success:false,
            message:'Not Found'
        })
    }
    const menuItem=await Menu.create(req.body)
    restaurant=await Restaurant.findOneAndUpdate({_id:req.body.restaurantId,isDeleted:false},{$inc:{"stats.menuItems":1}},{returnDocument:'after',runValidators:true})
    res.status(201).json({
        success:true,
        message:'Menu Created',
        data:menuItem
    })
})

export const getMenuById=asyncHandler(async(req,res,next)=>{
    const menuItem=await Menu.findOne({_id:req.params.id,isDeleted:false})
    if(!menuItem){
        return res.status(404).json({
            success:false,
            message:'Restaurant Not Found'
        })
    }
    res.status(200).json({
        success:true,
        message:'Restaurant Found',
        data:menuItem
    })
})
export const updateMenu=asyncHandler(async(req,res,next)=>{
    const update={}
    console.log(req.body)
    if(req.body.name!==undefined){
        update.name=req.body.name
    }
    if(req.body.description!==undefined){
        update.description=req.body.description
    }
    if(req.body.price!==undefined){
        update.price=req.body.price
    }
    if(req.body.availability){
        update.availability=req.body.availability
    }
    const menuItem=await Menu.findOneAndUpdate({_id:req.params.id,isDeleted:false},update,{returnDocument:'after',runValidators:true})
    if(!menuItem){
        return res.status(404).json({
            success:false,
            message:'Restaurant Not Found'
        })
    }
    res.status(200).json({
        success:true,
        message:'Restaurant Found',
        data:menuItem
    })
})
export const deleteMenu=asyncHandler(async(req,res,next)=>{
    const menuItem=await Menu.findOneAndUpdate({_id:req.params.id,isDeleted:false},{isDeleted:true},{returnDocument:'after',runValidators:true})
    if(!menuItem){
        return res.status(404).json({
            success:false,
            message:'Restaurant Not Found'
        })
    }
    const restaurant=await Restaurant.findOneAndUpdate({_id:menuItem.restaurantId,isDeleted:false},{$inc:{"stats.menuItems":-1}},{returnDocument:'after',runValidators:true})
    res.status(200).json({
        success:true,
        message:'Restaurant Deleted',
        data:{menuItem,restaurant}
    })
})

export const getMenu=asyncHandler(async(req,res,next)=>{
    const filter=filterBuilder(req.query)
    const sort=sortBuilder(req.query)
    const {skip,limit}=pagination(req.query)
    const menuItems=await Menu.find(filter).sort(sort).skip(skip).limit(limit)
    if(menuItems.length===0){
        return res.status(404).json({
            success:false,
            message:'Restaurants Not Found'
        })
    }
    res.status(200).json({
        success:true,
        message:'Restaurant Found',
        data:menuItems
    })
})
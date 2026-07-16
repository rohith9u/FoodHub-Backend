import { Review } from "../models/reviewModel.js";
import { Restaurant } from "../models/restaurantModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
export const createReview=asyncHandler(async(req,res,next)=>{
    const review=await Review.create(req.body)
    let restaurant=await Restaurant.findOne({_id:req.body.restaurantId,isDeleted:false})
    if(!restaurant){
        return res.status(404).json({
            success:false,
            message:'Restaurant Not found'
        })
    }
    const avg_rating=((restaurant.stats.avg_rating*restaurant.stats.totalReviews)+review.rating)/(restaurant.stats.totalReviews+1)
    restaurant=await Restaurant.findOneAndUpdate({_id:req.body.restaurantId,isDeleted:false},{$inc:{"stats.totalReviews":1},$set:{"stats.avg_rating":avg_rating}},{runValidators:true,returnDocument:'after'})
    res.status(201).json({
        success:true,
        message:'Review created',
        data:{review,restaurant}
    })
})
export const getReviewByRestaurantId=asyncHandler(async(req,res,next)=>{
    const review=await Review.find({restaurantId:req.params.id,isDeleted:false})
    if(review.length===0){
        return res.status(404).json({
            success:false,
            message:'Reviews for this restaurant Not found'
        })
    }
    res.status(200).json({
        success:true,
        message:'Reviews Found',
        data:review
    })
})
export const getReviewById=asyncHandler(async(req,res,next)=>{
    const review=await Review.findOne({_id:req.params.id,isDeleted:false}).populate('restaurantId','name city -_id')
    if(!review){
        return res.status(404).json({
            success:false,
            message:'Reviews Not found'
        })
    }
    res.status(200).json({
        success:true,
        message:'Review Found',
        data:review
    })
})
export const deleteReviewById=asyncHandler(async(req,res,next)=>{
    const review=await Review.findOneAndUpdate({_id:req.params.id,isDeleted:false},{isDeleted:true},{runValidators:true,returnDocument:'after'}).populate('restaurantId','name city')
    if(!review){
        return res.status(404).json({
            success:false,
            message:'Not Found'
        })
    }
    let restaurant=await Restaurant.findOne({_id:review.restaurantId._id,isDeleted:false})
    if(!restaurant){
        return res.status(404).json({
            success:false,
            message:'Restaurant Not found'
        })
    }
    let avg_rating;

    if (restaurant.stats.totalReviews === 1) {
        avg_rating = 0;
    } else {
        avg_rating =
        (
            (restaurant.stats.avg_rating * restaurant.stats.totalReviews)
            - review.rating
        ) / (restaurant.stats.totalReviews - 1);
    }
    res.status(200).json({
        success:true,
        message:'Review Found',
        data:review
    })
})
export const updateReviewById=asyncHandler(async(req,res,next)=>{
    let review;
    if(req.body.comment!==undefined){
        review=await Review.findOneAndUpdate({_id:req.params.id,isDeleted:false},{comment:req.body.comment},{runValidators:true,returnDocument:'after'})
    }
    if(!review){
        return res.status(404).json({
            success:false,
            message:'Not Found'
        })
    }
    res.status(200).json({
        success:true,
        message:'Review Updated',
        data:review
    })
})
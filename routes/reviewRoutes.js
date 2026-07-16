import express from 'express'
import { createReview, deleteReviewById, getReviewById, getReviewByRestaurantId, updateReviewById } from '../controllers/reviewController.js'
export const reviewRoute=express.Router()
reviewRoute.get('/restaurant/:id',getReviewByRestaurantId)
reviewRoute.get('/:id',getReviewById)
reviewRoute.post('/',createReview)
reviewRoute.patch('/:id',updateReviewById)
reviewRoute.delete('/:id',deleteReviewById)
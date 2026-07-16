import express from 'express'
import { createRestaurant, deleteRestaurant, getRestaurant, getRestaurantById, updateRestaurant } from '../controllers/restaurantController.js'
export const restaurantRoute=express.Router()
restaurantRoute.post('/',createRestaurant)
restaurantRoute.get('/',getRestaurant)
restaurantRoute.get('/:id',getRestaurantById)
restaurantRoute.patch('/:id',updateRestaurant)
restaurantRoute.delete('/:id',deleteRestaurant)
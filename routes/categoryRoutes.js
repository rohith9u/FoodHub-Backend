import express from 'express'
import { createCategory, deleteCategory, getCategory, getCategoryById, getRestaurantbyCategory, updateCategory } from '../controllers/categoryController.js'
export const categoryRoute=express.Router()
categoryRoute.get('/:id',getCategoryById)
categoryRoute.get('/',getCategory)
categoryRoute.get('/:name/restaurants',getRestaurantbyCategory)
categoryRoute.post('/',createCategory)
categoryRoute.patch('/:id',updateCategory)
categoryRoute.delete('/:id',deleteCategory)
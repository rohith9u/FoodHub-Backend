import express from 'express'
import { createMenu, deleteMenu, getMenu, getMenuById, updateMenu } from '../controllers/menuController.js'
export const menuRoute=express.Router()
menuRoute.get('/',getMenu)
menuRoute.get('/:id',getMenuById)
menuRoute.post('/',createMenu)
menuRoute.patch('/:id',updateMenu)
menuRoute.delete('/:id',deleteMenu)
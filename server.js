import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import { categoryRoute } from './routes/categoryRoutes.js'
import { errorHandler } from './middleware/errorHandler.js'
import { restaurantRoute } from './routes/restaurantRoutes.js'
import { menuRoute} from './routes/menuRoutes.js'
import { reviewRoute } from './routes/reviewRoutes.js'
dotenv.config()
const app=express()
try{
    await connectDB()
    app.listen(process.env.PORT,()=>{
        console.log('Server Connected')
    })
}
catch{
    console.log('Database Not Connected')
    process.exit(1)
}
app.use(express.json())
app.use('/categories',categoryRoute)
app.use('/restaurants',restaurantRoute)
app.use('/menus',menuRoute)
app.use('/reviews',reviewRoute)
app.use(errorHandler)
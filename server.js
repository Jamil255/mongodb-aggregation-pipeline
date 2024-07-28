import express from 'express'
import connectDb from './config/db.js'
import route from './routes/index.js'
const app = express()
console.log(app)
const PORT = process.env.PORT || 3000
connectDb()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(route)
app.listen(PORT, () => console.log(`Port: ${PORT}`))

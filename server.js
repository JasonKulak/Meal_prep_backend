// Dependencies
require('dotenv').config()
require('./models/connection')
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const MealRouter = require('./controllers/meal')

//Application Object
const app = express()

//register middleware
app.use(morgan("dev"))
app.use("/static", express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))



app.use("/", MealRouter)





// Listener
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`GET IN MY BELLY!!!`)
})
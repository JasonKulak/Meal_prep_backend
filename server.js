// Dependencies
require('dotenv').config()
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

//routes
app.get("/", (req, res) => {
    res.send("I'm so hungry I could eat at Arby's")
})

app.use("/meal", MealRouter)





// Listener
const PORT = process.env.PORT || 1984
app.listen(PORT, () => {
    console.log(`GET IN MY BELLY!!!`)
})
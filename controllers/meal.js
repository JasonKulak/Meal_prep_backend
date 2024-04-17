const express = require("express")
const Meal = require("../models/meal")


const router = express.Router()

//Error Handler
function errorHandler(error, res){
    res.json(error)
}

//ROUTES

//Seed Route
router.get("/seed", async (req, res) => {
    await Meal.deleteMany({})
    const meals = await Meal.create([
        {dayOfTheWeek: "Monday", breakfast: "", forHowManyPeople: 1, isItPrepared: false, lunch: "", forHowManyPeople: 1, isItPrepared: false, dinner: "", forHowManyPeople: 2, isItPrepared: false},
        {dayOfTheWeek: "Tuesday", breakfast: "", forHowManyPeople: 1, isItPrepared: false, lunch: "", forHowManyPeople: 1, isItPrepared: false, dinner: "", forHowManyPeople: 2, isItPrepared: false},
        {dayOfTheWeek: "Wednesday", breakfast: "", forHowManyPeople: 1, isItPrepared: false, lunch: "", forHowManyPeople: 1, isItPrepared: false, dinner: "", forHowManyPeople: 2, isItPrepared: false},
        {dayOfTheWeek: "Thursday", breakfast: "", forHowManyPeople: 1, isItPrepared: false, lunch: "", forHowManyPeople: 1, isItPrepared: false, dinner: "", forHowManyPeople: 2, isItPrepared: false},
        {dayOfTheWeek: "Friday", breakfast: "", forHowManyPeople: 1, isItPrepared: false, lunch: "", forHowManyPeople: 1, isItPrepared: false, dinner: "", forHowManyPeople: 2, isItPrepared: false},
        {dayOfTheWeek: "Saturday", breakfast: "", forHowManyPeople: 1, isItPrepared: false, lunch: "", forHowManyPeople: 1, isItPrepared: false, dinner: "", forHowManyPeople: 2, isItPrepared: false},
        {dayOfTheWeek: "Sunday", breakfast: "", forHowManyPeople: 1, isItPrepared: false, lunch: "", forHowManyPeople: 1, isItPrepared: false, dinner: "", forHowManyPeople: 2, isItPrepared: false},
    ])
    res.json(meals)
    // res.send("hello world")
})

//INDUCES
//Index Route - GET
router.get("/", async (req, res) => {
    try{
        const meals = await Meal.find({})
        res.render("meal/index.ejs", {meals})
        // res.send("hello world")
    }catch (err){
        res.send(err)
    }
})

//New Route - GET

//Destroy Route - DELETE

//Update Route - PUT

//Create Route - POST

//Edit Route - GET

//Show Route - GET
router.get("/show/:id", async (req, res) => {
    const meal = await Meal.findById(req.params.id)
    // console.log(meal)
    res.render("meal/show.ejs", {meal})
    // res.send("hello world")
})


//EXPORT THE ROUTES
module.exports = router
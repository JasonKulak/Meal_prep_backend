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
    await Meal.deleteMany({}).catch((error) => errorHandler(error, res))
    const meals = await Meal.create([
        {dayOfTheWeek: "Monday", breakfast: "", forHowManyPeople: 1, isItPrepared: false, lunch: "", forHowManyPeople: 1, isItPrepared: false, dinner: "", forHowManyPeople: 2, isItPrepared: false},
        {dayOfTheWeek: "Tuesday", breakfast: "", forHowManyPeople: 1, isItPrepared: false, lunch: "", forHowManyPeople: 1, isItPrepared: false, dinner: "", forHowManyPeople: 2, isItPrepared: false},
        {dayOfTheWeek: "Wednesday", breakfast: "", forHowManyPeople: 1, isItPrepared: false, lunch: "", forHowManyPeople: 1, isItPrepared: false, dinner: "", forHowManyPeople: 2, isItPrepared: false},
        {dayOfTheWeek: "Thursday", breakfast: "", forHowManyPeople: 1, isItPrepared: false, lunch: "", forHowManyPeople: 1, isItPrepared: false, dinner: "", forHowManyPeople: 2, isItPrepared: false},
        {dayOfTheWeek: "Friday", breakfast: "", forHowManyPeople: 1, isItPrepared: false, lunch: "", forHowManyPeople: 1, isItPrepared: false, dinner: "", forHowManyPeople: 2, isItPrepared: false},
        {dayOfTheWeek: "Saturday", breakfast: "", forHowManyPeople: 1, isItPrepared: false, lunch: "", forHowManyPeople: 1, isItPrepared: false, dinner: "", forHowManyPeople: 2, isItPrepared: false},
        {dayOfTheWeek: "Sunday", breakfast: "", forHowManyPeople: 1, isItPrepared: false, lunch: "", forHowManyPeople: 1, isItPrepared: false, dinner: "", forHowManyPeople: 2, isItPrepared: false},
    ]).catch((error) => errorHandler(error, res))
    res.json(meals)
})

//INDUCES
//Index Route - GET
router.get("/", async (req, res) => {
    const meals = await Meal.find({}).catch((error) => errorHandler(error,res))
    res.render("meal/index.ejs", {meals})
})

//New Route - GET

//Destroy Route - DELETE

//Update Route - PUT

//Create Route - POST

//Edit Route - GET

//Show Route - GET



//EXPORT THE ROUTES
module.exports = router
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
        {dayOfTheWeek: "Monday", mealOne: "Breakfast", howManyPeopleBreakfast: null, isItPreparedOne: true, mealTwo: "Lunch", howManyPeopleLunch: 10, isItPreparedTwo: false, mealThree: "Dinner", howManyPeopleDinner: 2, isItPreparedThree: true},
        {dayOfTheWeek: "Tuesday", mealOne: "Breakfast", howManyPeopleBreakfast: null, isItPreparedOne: false, mealTwo: "Lunch", howManyPeopleLunch: null, isItPreparedTwo: false, mealThree: "Dinner", howManyPeopleDinner: null, isItPreparedThree: false},
        {dayOfTheWeek: "Wednesday", mealOne: "Breakfast", howManyPeopleBreakfast: null, isItPreparedOne: false, mealTwo: "Lunch", howManyPeopleLunch: null, isItPreparedTwo: false, mealThree: "Dinner", howManyPeopleDinner: null, isItPreparedThree: false},
        {dayOfTheWeek: "Thursday", mealOne: "Breakfast", howManyPeopleBreakfast: null, isItPreparedOne: false, mealTwo: "Lunch", howManyPeopleLunch: null, isItPreparedTwo: false, mealThree: "Dinner", howManyPeopleDinner: null, isItPreparedThree: false},
        {dayOfTheWeek: "Friday", mealOne: "Breakfast", howManyPeopleBreakfast: null, isItPreparedOne: false, mealTwo: "Lunch", howManyPeopleLunch: null, isItPreparedTwo: false, mealThree: "Dinner", howManyPeopleDinner: null, isItPreparedThree: false},
        {dayOfTheWeek: "Saturday", mealOne: "Breakfast", howManyPeopleBreakfast: null, isItPreparedOne: false, mealTwo: "Lunch", howManyPeopleLunch: null, isItPreparedTwo: false, mealThree: "Dinner", howManyPeopleDinner: null, isItPreparedThree: false},
        {dayOfTheWeek: "Sunday", mealOne: "Breakfast", howManyPeopleBreakfast: null, isItPreparedOne: false, mealTwo: "Lunch", howManyPeopleLunch: null, isItPreparedTwo: false, mealThree: "Dinner", howManyPeopleDinner: null, isItPreparedThree: false},
    ])
    res.json(meals)
})

//INDUCES
// Index Route - GET
// Index page option
// router.get("/monday", async (req, res) => {
//     try{
//         let meals = await Meal.find({})
//         let results = meals.filter(meal => meal.dayOfTheWeek.toLowerCase() === "monday")
//         res.render("meal/index.ejs", {meals:results})
//     }catch (err){
//         res.send(err)
//     }
// })
// router.get("/tuesday", async (req, res) => {
//     try{
//         let meals = await Meal.find({})
//         let results = meals.filter(meal => meal.dayOfTheWeek.toLowerCase() === "tuesday")
//         res.render("meal/index.ejs", {meals:results})
//     }catch (err){
//         res.send(err)
//     }
// })

//slash route is the same as localhost:3000
//landing page option
router.get("/", async (req, res) => {
    // res.render("meal/landing.ejs")
    let meals = await Meal.find({})
    // console.log(meals)
    res.render("meal/index.ejs", {meals})
})

//New Route - GET

//Destroy Route - DELETE

//Update Route - PUT
router.put("/show/:id", async (req, res) => {
    req.body.isItPreparedOne = Boolean(req.body.isItPreparedOne)
    req.body.isItPreparedTwo = Boolean(req.body.isItPreparedTwo)
    req.body.isItPreparedThree = Boolean(req.body.isItPreparedThree)
    // console.log(req.body)
    await Meal.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/")
})

//Create Route - POST
router.post("/", async (req, res) => {
    req.body.isItPreparedOne = Boolean(req.body.isItPreparedOne)
    req.body.isItPreparedTwo = Boolean(req.body.isItPreparedTwo)
    req.body.isItPreparedThree = Boolean(req.body.isItPreparedThree)
    await Meal.create(req.body)
    res.redirect("/")
})

//Edit Route - GET
router.get("/show/:id/edit", async (req, res) => {
    try{
        const meal = await Meal.findById(req.params.id)
        res.render("meal/edit.ejs", {meal})
    }catch (err){
        res.send(err)
    }
})

//Show Route - GET
router.get("/show/:id", async (req, res) => {
    const meal = await Meal.findById(req.params.id)
    console.log(meal)
    res.render("meal/show.ejs", {meal})
})


//EXPORT THE ROUTES
module.exports = router
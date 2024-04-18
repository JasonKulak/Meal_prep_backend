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
        {dayOfTheWeek: "Monday", meal: "Breakfast", forHowManyPeople: null, isItPrepared: true},
        {dayOfTheWeek: "Monday", meal: "Lunch", forHowManyPeople: 10, isItPrepared: false},
        {dayOfTheWeek: "Monday", meal: "Dinner", forHowManyPeople: 2, isItPrepared: true},
        {dayOfTheWeek: "Tuesday", meal: "Breakfast", forHowManyPeople: null, isItPrepared: false},
        {dayOfTheWeek: "Tuesday", meal: "Lunch", forHowManyPeople: null, isItPrepared: false},
        {dayOfTheWeek: "Tuesday", meal: "Dinner", forHowManyPeople: null, isItPrepared: false},
        {dayOfTheWeek: "Wednesday", meal: "Breakfast", forHowManyPeople: null, isItPrepared: false},
        {dayOfTheWeek: "Wednesday", meal: "Lunch", forHowManyPeople: null, isItPrepared: false},
        {dayOfTheWeek: "Wednesday", meal: "Dinner", forHowManyPeople: null, isItPrepared: false},
        {dayOfTheWeek: "Thursday", meal: "Breakfast", forHowManyPeople: null, isItPrepared: false},
        {dayOfTheWeek: "Thursday", meal: "Lunch", forHowManyPeople: null, isItPrepared: false},
        {dayOfTheWeek: "Thursday", meal: "Dinner", forHowManyPeople: null, isItPrepared: false},
        {dayOfTheWeek: "Friday", meal: "Breakfast", forHowManyPeople: null, isItPrepared: false},
        {dayOfTheWeek: "Friday", meal: "Lunch", forHowManyPeople: null, isItPrepared: false},
        {dayOfTheWeek: "Friday", meal: "Dinner", forHowManyPeople: null, isItPrepared: false},
        {dayOfTheWeek: "Saturday", meal: "", forHowManyPeople: null, isItPrepared: false},
        {dayOfTheWeek: "Sunday", meal: "", forHowManyPeople: null, isItPrepared: false},
    ])
    res.json(meals)
})

//INDUCES
//Index Route - GET
//landing page option
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
    res.render("meal/index.ejs", {meals})
})
//New Route - GET

//Destroy Route - DELETE

//Update Route - PUT
router.put("/show/:id", async (req, res) => {
    req.body.available = Boolean(req.body.available)
    await Meal.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/")
})

//Create Route - POST
router.post("/", async (req, res) => {
    req.body.available = Boolean(req.body.available)
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
    res.render("meal/show.ejs", {meal})
})


//EXPORT THE ROUTES
module.exports = router
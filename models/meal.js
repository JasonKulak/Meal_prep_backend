const mongoose = require("./connection")

// Meal Schema
const mealSchema = new mongoose.Schema({
    dayOfTheWeek: String,
    meal: String,
    forHowManyPeople: Number,
    isItPrepared: Boolean,
})

//Meal model - interface with the database for Meals
const Meal = mongoose.model("meal", mealSchema)

//Export the Meal Model
module.exports = Meal
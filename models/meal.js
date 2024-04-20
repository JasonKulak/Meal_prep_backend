const mongoose = require("./connection")

// Meal Schema
const mealSchema = new mongoose.Schema({
    dayOfTheWeek: String,
    mealOne: String,
    howManyPeopleBreakfast: Number,
    isItPreparedOne: Boolean,
    mealTwo: String,
    howManyPeopleLunch: Number,
    isItPreparedTwo: Boolean,
    mealThree: String,
    howManyPeopleDinner: Number,
    isItPreparedThree: Boolean,
})

//Meal model - interface with the database for Meals
const Meal = mongoose.model("meal", mealSchema)

//Export the Meal Model
module.exports = Meal
const mongoose = require("./connection")

// Meal Schema
const mealSchema = new mongoose.Schema({
    dayOfTheWeek: String,
    breakfast: String,
    forHowManyPeople: Number,
    isItPrepared: Boolean,
    lunch: String,
    forHowManyPeople: Number,
    isItPrepared: Boolean,
    dinner: String,
    forHowManyPeople: Number,
    isItPrepared: Boolean,
})

//Meal model - interface with the database for Meals
const Meal = mongoose.model("Meal", mealSchema)

//Export the Meal Model
module.exports = Meal
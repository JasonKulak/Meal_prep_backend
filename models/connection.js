//Dependencies
require('dotenv').config()
const mongoose = require('mongoose')

//Establish Connection
// get .env variables
const DATABASE_URL = process.env.DATABASE_URL

//Database Connection
mongoose.connect(DATABASE_URL);

//Connection Events
mongoose.connection
.on("error", (error) => console.log("error"))
.on("connected", () => console.log("Connected to Mongoose, Dude!"))
.on("disconnected", () => console.log("Disconnected from Mongoose"))

//export the mongoose object
module.exports = mongoose
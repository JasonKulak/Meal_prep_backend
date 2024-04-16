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
.on("open", () => console.log("Connected to Mongoose, Dude!"))
.on("close", () => console.logt("Disconnected from Mongoose"))
.on("error", (error) => console.log(error))

//export the mongoose object
module.exports = mongoose
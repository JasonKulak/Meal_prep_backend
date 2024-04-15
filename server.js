// Dependencies
require('dotenv').config()
const express = require('express')

//Application Object
const app = express()






// Listener
const PORT = process.env.PORT || 1984
app.listen(PORT, () => {
    console.log(`GET IN MY BELLY!!!`)
})
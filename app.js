require('dotenv').config()
const express =  require("express")
const app = express()
const bodyParser = require('body-parser'); 
const fs = require('fs')
const port = process.env.PORT || 3000
const countriesRouter = require('./routes/countriesRouter')

// ADDING BODY PARSER TO LOOK AT THE BODY OF A POST REQUEST
// https://www.npmjs.com/package/body-parser
app.use(bodyParser.json())

app.use('/api/countries', countriesRouter);


app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
})
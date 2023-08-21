require('dotenv').config()
const express =  require("express")
const app = express()
const countries = require('./countries')
const bodyParser = require('body-parser'); 
const port = process.env.PORT || 3000

// 1. GET /api/countries
app.get('/api/countries', (req, res)=>{
    res.json(countries)
})

// 2. POST /api/countries
// This route should accept JSON data and add the new country received to the list of countries (eg: add an object inside the countries array).

app.post('/api/countries', (req, res) => {
    const items = [];
    let addCountry = req.params.add_country;
    const  newCountry = req.body;
    items.push(newCountry);
    res.status(201).json({ message: 'Item added successfully', item: newCountry });

})
// 3. GET /api/countries/:code
// This route should return a single country, based on the code provided. You should accept both an alpha 2 or an alpha 3 code. 

// 4. PUT /api/countries/:code
// This route should accept edits to an existing country in the list (eg: edit an object inside the countries array).

// 5. DELETE /api/countries/:code
// This route should allow you to delete a specific country from the list (eg: remove an object from the array)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
})
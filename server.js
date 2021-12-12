// Allows us to start the server

const express = require('express');
// Allows us to separate our secret from our source code
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');


const app = express();

dotenv.config({ path: 'config.env'})
const PORT = process.env.PORT || 8080

// Log Requests
app.use(
    morgan(
        'tiny'));

// Parse request to body-parser
app.use(
    bodyparser.urlencoded({
        extended:true
    }))

// Set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname,"views/ejs"))

// Load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/add-user', (req, res) => {
    res.render('add_user');
})

app.get('/update-user', (req, res) => {
    res.render('update_user');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});
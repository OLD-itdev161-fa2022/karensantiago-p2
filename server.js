// Allows us to start the server

const express = require('express');
// Allows us to separate our secret from our source code
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();

dotenv.config({ path: 'config.env'})
const PORT = process.env.PORT || 8080

// Log Requests
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send("Project 2 Application");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});
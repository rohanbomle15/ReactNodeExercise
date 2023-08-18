
const express  = require('express')
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

require('./route/todo.routes.js')(app);

app.get("/todolist", (req, res) => {
    //res.json({ "users": ["userOne","userTwo"]})
    res.sendFile(path.resolve(__dirname, './responses/todolist.json'))
})

app.listen(5000, () => { console.log("Server started on port 5000")})

const express  = require('express')
const fs = require('fs');
const path = require('path');
const app = express()

app.get("/todolist", (req, res) => {
    //res.json({ "users": ["userOne","userTwo"]})
    res.sendFile(path.resolve(__dirname, './responses/todolist.json'))
})

app.listen(5000, () => { console.log("Server started on port 5000")})
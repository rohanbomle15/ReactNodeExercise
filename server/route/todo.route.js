module.exports = (app) => {
    const todotask = require('../controller/todo.controller.js');

    // Create a new Note
    app.post('/task', todotask.create);

    // Retrieve all Notes
    app.get('/task', todotask.findAll);

    // Retrieve a single Note with noteId
    app.get('/task/:taskId', todotask.findOne);

    // Update a Note with noteId
    app.put('/task/:taskId', todotask.update);

    // Delete a Note with noteId
    app.delete('/task/:taskId', todotask.delete);
}
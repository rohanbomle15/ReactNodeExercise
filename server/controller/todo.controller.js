const ToDoTask = require('../model/todo.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const note = new ToDoTask({
        task: req.body.task || "Untitled Task", 
        content: req.body.content
    });

    // Save Note in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

// Retrieve and return all task from the database.
exports.findAll = (req, res) => {
    ToDoTask.find()
    .then(task => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving task."
        });
    });
};

// Find a single note with a taskId
exports.findOne = (req, res) => {
    ToDoTask.findById(req.params.taskId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.taskId
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.taskId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.taskId
        });
    });
};

// Update a note identified by the taskId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    ToDoTask.findByIdAndUpdate(req.params.taskId, {
        task: req.body.task || "Untitled Note",
        content: req.body.content
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.taskId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.taskId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.taskId
        });
    });
};

// Delete a note with the specified taskId in the request
exports.delete = (req, res) => {
    ToDoTask.findByIdAndRemove(req.params.taskId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.taskId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.taskId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.taskId
        });
    });
};
const mongoose = require('mongoose');

const TodoTaskSchema = mongoose.Schema({
    task: String,
    completed: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('TodoTask', TodoTaskSchema);
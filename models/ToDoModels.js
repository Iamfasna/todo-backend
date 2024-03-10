const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});



module.exports = mongoose.model('ToDo', todoSchema)
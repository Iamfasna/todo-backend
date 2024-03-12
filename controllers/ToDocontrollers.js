const ToDoModel = require('../models/ToDoModels')

module.exports.getToDo = async (req, res) => {
  console.log("hi")
  const toDo = await ToDoModel.find()
  res.send(toDo)
}

module.exports.saveToDo = async (req, res) => {
  const { text, description } = req.body
  ToDoModel.create({ text, description })
    .then((data) => {
      console.log("added successfully");
      console.log(data)
      res.send(data)

    })

}

module.exports.updateToDo = async (req, res) => {
  const { _id, text, description, date } = req.body
  ToDoModel.findByIdAndUpdate(_id, { text, description, date })
    .then(() => res.send('updated successfully'))
    .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted  successfully'))
    .catch((err) => console.log(err))
}





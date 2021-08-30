const {Task,
  Subtask,
  User} = require("../models/index");
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');

function getTaskById(id) {
 return Task.findOne({
  where: { id: id },
  attributes: ['id'],
  include: [{ model: User, attributes:["id"]}]
})
}

module.exports.getTasks = (id) => Task.findAll({
  where: { id: id },
  attributes: [ 'subtitle', 'settask', 'id'],
  include: [{ model: Subtask}]
});

module.exports.updateSubtask = (id) => {
  return Subtask.update({ status: true }, { where: { id: id } }).then(() => {
      return Subtask.findOne({ where: { id: id },  attributes: ['taskId'],  })
    })  
  .then((id) => {
    return getTaskById(id.taskId)
  })


}








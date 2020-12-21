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



module.exports.setTask = (socket, io, {title, subtitle, date, executor, type, subtasks}) => {
  const colors = {
    "Высокий":["#cf403b","#d32f2f", "#e53935", "#bf360c"],
    "Средний":["#ff9431","#ff9800", "#ffc107", "#f9a825"],
    "Низкий":["#4f40f3", "#2196f3", "#03a9f4", "#3f51b5"],
  }
  let randomIndex = Math.round( Math.random() * colors[type].length);
  let color =  colors[type][randomIndex];
  let uidTask = uuidv4();
  let startdate = date.start
  let deadline = date.end
  return Task.create({
    id: uidTask,
    title,
    subtitle,
    status: false,
    scanned: false,
    color,
    type,
    startdate,
    deadline,
    settask: socket.decoded.id,
  })
  .then(async (task)=>{
    for  (idUser of executor)
    await User.findOne({ where: { id: idUser } }).then(user => {
        if (!user) return;
        if (!task) return;
        user.addTask(task)
      })
      .catch((err) => console.log(err));
      return task
    })
  .then((task)=>{

    if (subtasks.length) {
      let subtasksValid = subtasks.map((elem) => {
        let newElem = {};
        newElem.title = elem;
        newElem.status = false;
        newElem.taskId = task.id;
        return newElem;
      });
      Subtask.bulkCreate(subtasksValid);
    }
    return Task.findOne({
      where: { id: task.id },
      attributes: ['id', 'startdate', 'deadline', 'title', 'scanned', "color"],
      include: [{ model: User, attributes: ['id']}]
    })
  })
  }




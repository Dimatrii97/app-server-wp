const { Task, Subtask, User } = require('../models/index');
const { v4: uuidv4 } = require('uuid');
// const { Op } = require('sequelize');
const { getColor } = require('../constans/index');
const Token = require('../token/index');

class TaskController {
  async tasks(req, res) {
    try {
      let id = Token.getAccessPayload(req.header('Authorization')).id;
      const tasks = await User.findOne({
        where: { id },
        attributes: [],
        include: {
          model: Task,
          attributes: [
            'id',
            'startdate',
            'deadline',
            'title',
            'scanned',
            'color',
          ],
        },
      });
      res.json(tasks.tasks);
    } catch (error) {
      console.log(error);
      res.status(400).json({ messages: 'Ошибка задачи' });
    }
  }
  // socket
  taskById(id) {
    return Task.findAll({
      where: { id: id },
      attributes: ['subtitle', 'settask', 'id'],
      include: [
        { model: Subtask },
        { model: User, attributes: ['id', 'img', 'name'] },
      ],
    });
  }

  async updateSubtasks(id) {
    Subtask.update({ status: true }, { where: { id: id } });
    const { taskId } = await Subtask.findOne({
      where: { id: id },
      attributes: ['taskId'],
    });
    return { idSubtasks: id, taskId };
  }

  async setTask(id, { title, subtitle, date, executor, type, subtasks }) {
    const task = await Task.create({
      id: uuidv4(),
      title,
      subtitle,
      status: false,
      scanned: false,
      color: getColor(type),
      type,
      startdate: date.start,
      deadline: date.end,
      settask: id,
    });
    await Promise.all(
      executor.map((userId) => {
        User.findOne({ where: { id: userId } }).then((user) => {
          if (!user) return;
          if (!task) return;
          user.addTask(task);
          return user;
        });
      })
    );
    if (subtasks.length) {
      const subtasksValid = subtasks.map((elem) => ({
        title: elem,
        status: false,
        taskId: task.id,
      }));
      await Subtask.bulkCreate(subtasksValid);
    }
    return { task, executor };
  }

  complite(id) {
    Task.update({ status: true }, { where: { id: id } });
    return Task.findOne({
      where: { id: id },
      attributes: ['id'],
      include: [{ model: User, attributes: ['id'] }],
    });
  }

  updateViewed(id) {
    return Task.update({ scanned: true }, { where: { id: id } });
  }
}

module.exports = new TaskController();

// function getTaskById(id) {
//   return
// }

module.exports.getTasks = (id) =>
  Task.findAll({
    where: { id: id },
    attributes: ['subtitle', 'settask', 'id'],
    include: [{ model: Subtask }],
  });
// TODO: через сокет
module.exports.updateSubtask = (id) => {
  return Subtask.update({ status: true }, { where: { id: id } })
    .then(() => {
      return Subtask.findOne({ where: { id: id }, attributes: ['taskId'] });
    })
    .then((id) => {
      return getTaskById(id.taskId);
    });
};
// TODO: через сокет

// return Task.findOne({
//   where: { id: task.id },
//   attributes: [
//     'id',
//     'startdate',
//     'deadline',
//     'title',
//     'scanned',
//     'color',
//   ],
//   include: [{ model: User, attributes: ['id'] }],
// });

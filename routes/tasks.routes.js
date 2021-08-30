const { Router } = require('express');
const router = Router();

const controller = require('../controlers/task.controler');
// const middleware = require('../middleware/middleware');
router.get('/tasks', controller.tasks);
router.get('/task/id', controller.taskById);
// router.get('/user', middleware.authUser, controller.user);
// router.get('/users/deparment', middleware.authUser, controller.usersDepartment);

module.exports = router;

// router.get('/api/tasks/user', async (req, res) => {
//   try {
//   TODO: написано как для post
//     const { tasks } = await controler.getTasksByUserId(
//       '27cd9988-f058-4ddf-8285-a2b99699feef'
//     );
//     res.json({ res: true, tasks });
//   } catch (error) {
//     res.json({
//       res: false,
//       message: 'Не удалось получить задачи',
//     });
//   }
// });
// router.get('/api/task/id', async (req, res) => {
// TODO: написано как для post
//   try {
//     const task = await controler.getTasks(id);
//     res.json({ res: true, task });
//   } catch (error) {
//     res.json({
//       res: false,
//       message: 'Не удалось получить задачу',
//     });
//   }
// });

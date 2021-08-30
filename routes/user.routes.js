// const controler = require('../controlers/user.controler');
const { Router } = require('express');
const router = Router();

const controller = require('../controlers/user.controler');
const middleware = require('../middleware/middleware');
router.post('/user/auth', controller.login);
router.get('/user/id', controller.userById);
router.get('/user/unauth', controller.logaut);
router.get('/user', middleware.authUser, controller.user);
router.get('/users/deparment', middleware.authUser, controller.usersDepartment);

module.exports = router;

// TODO:Admin
// router.post('/api/user/newUser', async (req, res) => {
//   try {
//     const user = await controler.createNewUser(req.body);
//     res.json({ res: true, user });
//   } catch (error) {
//     res.json({ res: false, message: 'Не удалось создать нового пользователя' });
//   }
// });

// router.post('/api/user/newUser', async (req, res) => {
//   try {
//     const department = await controler.addNewDepartment(req.body);
//     res.json({ res: true, department });
//   } catch (error) {
//     res.json({ res: false, message: 'Не удалось создать нового пользователя' });
//   }
// });

// router.get('/api/user/newUser', async (req, res) => {
//   try {
//     // TODO: написано как для post
//     const positions = await controler.getPositions(req.body.department);
//     res.json({ res: true, positions });
//   } catch (error) {
//     res.json({ res: false, message: 'Не удалось создать нового пользователя' });
//   }
// });

// router.delete('/api/user', async (req, res) => {
//   // TODO: написано как для post
//   try {
//     const id = await controler.deleteUser(id);
//     res.json({ res: true, id });
//   } catch (error) {
//     res.json({ res: false, message: 'Не удалось создать нового пользователя' });
//   }
// });

// router.get('/api/user/newUser', async (req, res) => {
//   try {
//     const departments = await controler.getDepartaments();
//     res.json({ res: true, departments });
//   } catch (error) {
//     res.json({ res: false, message: 'Не удалось создать нового пользователя' });
//   }
// });

// router.get('/api/users', async (req, res) => {
//   try {
//     const users = await controler.allUsers(req.department, [
//       'name',
//       'id',
//       'img',
//     ]);
//     res.json({ res: true, users });
//   } catch (error) {
//     res.json({ res: false, message: 'Не удалось создать нового пользователя' });
//   }
// });

// ================= no admin

// router.get('/api/user', async (req, res) => {
//   // TODO: переиминовать на getUserById написать под get
//   let id = Token.getAccessPayload(req.header('Authorization'));
//   try {
//     const user = await controler.getUser(id.id);
//     res.json({ res: true, user });
//   } catch (error) {
//     res.json({ res: false, message: 'Не удалось создать нового пользователя' });
//   }
// });

// router.get('/api/users', async (req, res) => {
//   // TODO: переиминовать на getUserByDepartment написать под get
//   try {
//     const users = await controler.getUsersDepartment(req);
//     res.json({ res: true, users });
//   } catch (error) {
//     res.json({ res: false, message: 'Не удалось создать нового пользователя' });
//   }
// });

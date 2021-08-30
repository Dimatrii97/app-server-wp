const controler = require('../controlers/message.controler');
const { Router } = require('express');
const router = Router();


const controller = require('../controlers/message.controler');
// const middleware = require('../middleware/middleware');
router.post('/messages/chat', controller.messagesAll);
router.get('/messages/last', controller.lastMessagesUser);
// router.get('/messages/unauth', controller.logaut);


module.exports = router;









// router.get('/api/messages/last', async (req, res) => {
//   try {
     // TODO: написано как для post
//     const messages = await controler.getUserLastMess(id);
//     res.json({ res: true, messages });
//   } catch (error) {
//     res.json({
//       res: false,
//       message: 'Не удалось получить сообщения',
//     });
//   }
// });

// router.get('/api/messages/', async (req, res) => {
//   try {
    // TODO: написано как для post socket = myid id = fromid
//     const messages = await controler.getuserMessages(socket, id, offset);
//     res.json({ res: true, messages });
//   } catch (error) {
//     res.json({
//       res: false,
//       message: 'Не удалось получить сообщения',
//     });
//   }
// });
module.exports = router;
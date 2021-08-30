const Messages = require('../models/messages');
const User = require('../models/user');
const { Op } = require('sequelize');
const Token = require('../token/index');

class MessagesController {
  async messagesAll(req, res) {
    try {
      const { interlocutorId, offset } = req.body;
      let userId = Token.getAccessPayload(req.header('Authorization')).id;
      const messages = await Messages.findAll({
        where: {
          [Op.or]: [
            { fromid: userId, toid: interlocutorId },
            { toid: userId, fromid: interlocutorId },
          ],
        },
        order: [['id', 'DESC']],
        limit: 15,
        offset: offset,
      });
      res.json(messages);
    } catch (error) {
      console.log(error);
      res.status(400).json({ messages: 'Ошибка при получние сообщений' });
    }
  }
  async lastMessagesUser(req, res) {
    try {
      let userId = Token.getAccessPayload(req.header('Authorization')).id;
      const answer = await Messages.findAll({
        where: {
          [Op.or]: [{ fromid: userId }, { toid: userId }],
        },
        attributes: ['fromid', 'toid'],
        group: ['fromid', 'toid'],
      });
      const unqId = answer
        .map((el) => Object.values(el.dataValues))
        .flat()
        .filter((el, i, arr) => !!el && arr.indexOf(el) === i && el !== userId);
      const promiseMessages = unqId.map((interlocutorId) => {
        return Messages.findAll({
          where: {
            [Op.or]: [
              { fromid: userId, toid: interlocutorId },
              { toid: userId, fromid: interlocutorId },
            ],
          },
          include: [
            {
              model: User,
              where: { id: { [Op.ne]: userId } },
              attributes: ['id', 'name', 'img'],
            },
          ],
          order: [['id', 'DESC']],
          limit: 1,
        }).then((arr) => {
          let correctRes = arr[0].dataValues;
          correctRes.interlocutor = arr[0].users[0];
          delete correctRes.users;
          return correctRes;
        });
      });
      const data = await Promise.all(promiseMessages);

      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(400).json({ messages: 'Ошибка при получние сообщений' });
    }
  }
  // socket
  async createNewMessage(fromid, toid, text, date) {
    const message = await Messages.create({
      fromid,
      toid,
      text,
      date,
      scanned: false,
    });
    await User.update(
      { messageId: message.id },
      {
        where: {
          [Op.or]: [{ id: message.fromid }, { id: message.toid }],
        },
      }
    );
    return message;
  }
  updateViewedMessage(id, fromid) {
    return Messages.update({ scanned: true }, { where: { toid: id, fromid } });
  }
}
module.exports = new MessagesController();

// module.exports.findAllLastMess = (currentUserId, UserId) =>
//   Messages.findAll({
//     where: {
//       [Op.or]: [
//         { fromid: currentUserId, toid: UserId },
//         { toid: currentUserId, fromid: UserId },
//       ],
//     },
//     order: [['id', 'DESC']],
//     limit: 1,
//   });
// TODO: оставить в сокете
// module.exports.newMessUsers = (socket, toid, text, date) =>
//   Messages.create({
//     fromid: socket.decoded.id,
//     toid,
//     text,
//     date,
//     scanned: false,
//   });

module.exports.getUserLastMess = async (id) => {
  // TODO: все проще
  // const to = Messages.findAll({
  //   where: { fromid: socket.decoded.id },
  //   attributes: ['toid'],
  //   group: ['toid'],
  // });
  // const from = Messages.findAll({
  //   where: { toid: socket.decoded.id },
  //   attributes: ['fromid'],
  //   group: ['fromid'],
  // });
  // const messagesArray = await Promise.all([from, to])
  //  messagesArray[0].map((el) => el.fromid);
  // messagesArray[1].map((el) => el.toid);
  // const idUsers = new Set([...messagesArray[0], ...messagesArray[1]]);
  // let usersArray = []
  // if (idUsers.size) {
  //    usersArray = await require('./user').getUserLastMess(socket, idUsers);
  //     } else {
  //       return []
  //     }
  // return
  // for (const user of users)
  //   .then((mess) => {
  //     user.dataValues.mess = mess[0];
  //   });
  // return users;
};
// TODO: через сокет

// module.exports.updateViewedMess = (toid, fromid) =>
//   Messages.update({ scanned: true }, { where: { toid, fromid } });

// module.exports.getuserMessages = (socket, id, offset) =>

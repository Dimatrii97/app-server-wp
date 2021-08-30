const User = require('../models/user');
const Range = require('../models/range');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const Token = require('../token/index');

function userById(id, attributes) {
  return User.findOne({
    where: { id },
    attributes,
  });
}

class UserControler {
  async login(req, res) {
    try {
      const { login, password } = req.body;
      const user = await User.findOne({ where: { login } });
      // TODO: code status not user
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          const token = Token.getAccessToken({
            login: user.login,
            id: user.id,
            range: user.range,
            position: user.position,
          });
          const { password, ...dataUser } = user.dataValues;
          return res.json({ user: dataUser, token });
        }
      }
      return res.status(400).json({ message: 'Неверный логин или пароль' });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: 'Ошибка при auth' });
    }
  }
  async user(req, res) {
    try {
      let id = Token.getAccessPayload(req.header('Authorization')).id;
      const user = await userById(id, [
        'name',
        'id',
        'img',
        'position',
        'department',
        'email',
        'age',
        'tel',
        'range',
      ]);
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: 'Ошибка при получения пользователя' });
    }
  }
  async usersDepartment(req, res) {
    try {
      let id = Token.getAccessPayload(req.header('Authorization')).id;
      const { department, range } = await User.findOne({
        where: { id },
        attributes: ['department', 'range'],
      });
      const users = await User.findAll({
        order: ['position'],
        where: {
          department: department,
          id: { [Op.ne]: id },
          range: { [Op.lte]: range },
        },
        attributes: ['name', 'id', 'img', 'position', 'department', 'range'],
      });
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: 'Ошибка при' });
    }
  }
  async logaut(req, res) {
    try {
      // TODO: придумай сам
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: 'Ошибка при' });
    }
  }
  async userById(req, res) {
    try {
      console.log(req.query, '11111');
      const { id } = req.query;
      const user = await userById(id, ['name', 'id', 'img']);
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: 'Ошибка при получении пользователя' });
    }
  }
}

module.exports = new UserControler();

let allUsers = (
  socket,
  attributes = [
    'name',
    'id',
    'img',
    'position',
    'department',
    'email',
    'age',
    'tel',
    'range',
  ]
) => {
  return User.findAll({
    order: ['department'],
    where: { id: { [Op.ne]: socket.decoded.id }, id: { [Op.ne]: 'admin' } },
    attributes: attributes,
  });
};
let getDepartaments = () =>
  Range.findAll({ attributes: ['department'], group: ['department'] });

module.exports.allUsers = allUsers;
module.exports.getDepartaments = getDepartaments;

// TODO:Меньше меня

module.exports.getUsersDepartment = async (id) => {};
// TODO: Подумать
module.exports.findOne = (socket, id) => {
  let userWrap = null;
  return User.findOne({ where: { id: id }, attributes: ['id', 'name', 'img'] })
    .then((user) => {
      userWrap = user;
      return require('./messages').findAllLastMess(socket, user);
    })
    .then((mess) => {
      userWrap.dataValues.mess = mess[0];
      return userWrap;
    });
};
// TODO: Подумать
module.exports.getUserLastMess = (socket, messages) => {
  return User.findAll({
    where: {
      id: { [Op.and]: { [Op.or]: [...messages], [Op.ne]: socket.decoded.id } },
    },
    attributes: ['id', 'name', 'img'],
  });
};

module.exports.createNewUser = async (data) => {
  const name = data.firstname + ' ' + data.lastname;
  const password = bcrypt.hashSync(data.password, 10);
  const profession = await Range.findOne({
    where: { department: data.department, position: data.position },
  });
  return User.create({
    id: uuidv4(),
    login: data.login,
    password: password,
    name: name,
    email: data.email,
    age: data.age,
    img: 'default',
    tel: data.tel,
    range: profession.range,
    department: data.department,
    position: data.position,
  });
};
//TODO: Перенос
module.exports.getPositions = (department) =>
  Range.findAll({
    where: { department },
    attributes: ['position'],
  });

module.exports.deleteUser = (id) => {
  return User.destroy({ where: { id } });
};
//TODO: Перенос
module.exports.addNewDepartment = ({ range, department, position }) => {
  let uid = uuidv4();
  return Range.create({ id: uid, range, department, position }).then((res) =>
    getDepartaments()
  );
};
//TODO: Перенос
module.exports.allDeps = () => Range.findAll({ order: ['department'] });

// TODO: переиминовать оставить в сокете
module.exports.getUserBySearch = (text = '') => {
  return User.findAll({
    where: { name: { [Op.iLike]: `%${text}%` } },
    attributes: ['name', 'img', 'id'],
  });
};

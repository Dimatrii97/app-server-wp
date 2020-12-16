const User = require('../models/user');
const Range = require('../models/range');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
let allUsers = (socket, attributes = ['name', 'id', 'img', 'position', 'department', 'email', 'age', 'tel', 'range']) => {
  return User.findAll({
    order: ['department'],
    where: { id: { [Op.ne]: socket.decoded.id, }, id: { [Op.ne]: 'admin', }, },
    attributes: attributes,
  });
};

module.exports.createUsers= (params) => {
  let password = bcrypt.hashSync("123456", 10);
  let usersIt=[{
    id:uuidv4(),
    login:"exemple1@mail.ru",
    password,
    name:"Jacob William",
    email:"exemple1@mail.ru",
    age:"2020-10-10",
    tel:"894324322344",
    range:5,
    department:"IT отдел",
    position:"Руководитель отдела"
  },
  {
    id:uuidv4(),
    login:"exemple2@mail.ru",
    password,
    name:"Lawrence Marvin",
    email:"exemple2@mail.ru",
    age:"2020-10-10",
    tel:"894324322344",
    range:4,
    department:"IT отдел",
    position:"Руководитель проектов"
  },
  {
    id:uuidv4(),
    login:"exemple3@mail.ru",
    password,
    name:"Clifford David",
    email:"exemple3@mail.ru",
    age:"2020-10-10",
    tel:"894324322344",
    range:4,
    department:"IT отдел",
    position:"Руководитель проектов"
  },
  {
    id:uuidv4(),
    login:"exemple4@mail.ru",
    password,
    name:"Peter Christopher",
    email:"exemple4@mail.ru",
    age:"2020-10-10",
    tel:"894324322344",
    range:4,
    department:"IT отдел",
    position:"Ст. Разработчик"
  },
  {
    id:uuidv4(),
    login:"exemple5@mail.ru",
    password,
    name:"Preston Edward",
    email:"exemple5@mail.ru",
    age:"2020-10-10",
    tel:"894324322344",
    range:4,
    department:"IT отдел",
    position:"Ст. Разработчик"
  },
  {
    id:uuidv4(),
    login:"exemple6@mail.ru",
    password,
    name:"Charles Edmund",
    email:"exemple6@mail.ru",
    age:"2020-10-10",
    tel:"894324322344",
    range:4,
    department:"IT отдел",
    position:"Ст. Разработчик"
  },
  {
    id:uuidv4(),
    login:"exemple7@mail.ru",
    password,
    name:"Donald David",
    email:"exemple7@mail.ru",
    age:"2020-10-10",
    tel:"894324322344",
    range:3,
    department:"IT отдел",
    position:"Разработчик"
  },
  {
    id:uuidv4(),
    login:"exemple8@mail.ru",
    password,
    name:"Anthony Timothy",
    email:"exemple8@mail.ru",
    age:"2020-10-10",
    tel:"894324322344",
    range:3,
    department:"IT отдел",
    position:"Разработчик"
  },
  {
    id:uuidv4(),
    login:"exemple9@mail.ru",
    password,
    name:"Mark Gilbert",
    email:"exemple9@mail.ru",
    age:"2020-10-10",
    tel:"894324322344",
    range:5,
    department:"IT отдел",
    position:"Разработчик"
  },
  {
    id:uuidv4(),
    login:"exemple10@mail.ru",
    password,
    name:"Allen Donald",
    email:"exemple10@mail.ru",
    age:"2020-10-10",
    tel:"894324322344",
    range:3,
    department:"IT отдел",
    position:"Разработчик"
  },
  {
    id:uuidv4(),
    login:"exemple11@mail.ru",
    password,
    name:"Ronald Anthony",
    email:"exemple11@mail.ru",
    age:"2020-10-10",
    tel:"894324322344",
    range:2,
    department:"IT отдел",
    position:"Сис. Админ"
  },
  
  {
    id:uuidv4(),
    login:"exemple12@mail.ru",
    password,
    name:"James Anthony",
    email:"exemple12@mail.ru",
    age:"2020-10-10",
    tel:"894324322344",
    range:2,
    department:"IT отдел",
    position:"Тестировщик"
  },
  {
    id:uuidv4(),
    login:"exemple13@mail.ru",
    password,
    name:"Alfred John",
    email:"exemple13@mail.ru",
    age:"2020-10-10",
    tel:"894324322344",
    range:4,
    department:"IT отдел",
    position:"Сис. Аналитик"
  },
  {
    id:uuidv4(),
    login:"exemple14@mail.ru",
    password,
    name:"Steven Ethan",
    email:"exemple14@mail.ru",
    age:"2020-10-10",
    tel:"894324322344",
    range:1,
    department:"IT отдел",
    position:"J-n Разработчик"
  },
  {
    id:uuidv4(),
    login:"exemple15@mail.ru",
    password,
    name:"Jacob Roland",
    email:"exemple15@mail.ru",
    age:"2020-10-10",
    tel:"894324322344",
    range:1,
    department:"IT отдел",
    position:"J-n Разработчик"
  },
]
for (const iterator of usersIt) {
  User.create({ id: iterator.id, login: iterator.login, password: password, name: iterator.name, email: iterator.email, age: iterator.age, img: 'default', tel: iterator.tel, range: iterator.range, department: iterator.department, position: iterator.position});
}
}
let getDepartamentsUsers = () =>
  Range.findAll({ attributes: ['department'], group: ['department'] })

module.exports.allUsers = allUsers
module.exports.getDepartamentsUsers = getDepartamentsUsers

module.exports.getUser = (socket, attributes = ['name', 'id', 'img', 'position', 'department', 'email', 'age', 'tel', 'range'], id = null, ) => {
  let searchId = id==null? socket.decoded.id : id
  return User.findAll({
    where: {id: searchId},
    attributes
  });
};

module.exports.getUsersDepartment = (socket) => {
 return User.findOne({where:{id: socket.decoded.id}, attributes: [  'department', 'range']}).then((user)=>{
    return  User.findAll({
      order: ['position'],
      where: { department: user.department, id: { [Op.ne]: socket.decoded.id, }},
      attributes: ['name', 'id', 'img', 'position', 'department', 'range']
    })
 })
};


module.exports.findOne = (socket, id, attributes) => {
  let userWrap = null;
  return User.findOne({ where: { id: id }, attributes: ['id', 'name', 'img']})
    .then((user) => {
      userWrap = user;
      return require('./messages').findAllLastMess(socket, user);
    })
    .then((mess) => {
      userWrap.dataValues.mess = mess[0];
      return userWrap;
    });
};
module.exports.getUserLastMess = (socket, messages)=>{
  return  User.findAll({
    where: { id: { [Op.and]: { [Op.or]: [...messages], [Op.ne]: socket.decoded.id, }, }, },
    attributes: ['id', 'name', 'img'],
  });
  
}

module.exports.adminNewUser = (socket, data)=>{
  let uid = uuidv4();
  let name =  data.firstname + " " + data.lastname;
  let password = bcrypt.hashSync(data.password, 10);
   return Range.findOne({
      where: { department: data.department, position: data.position },
    })
    .then((range) => {
      return User.create({ id: uid, login: data.login, password: password, name: name, email: data.email, age: data.age, img: 'https://www.ercolemoretti.it/WP2016/wp-content/uploads/2016/06/em_avatar_default-user.png', tel: data.tel, range: range.range, department: data.department, position: data.position, })
    })
    .then((res) => {
      return   allUsers(socket);
    })
  }


module.exports.getpositions = (department)=>
  Range.findAll({
  where: { department },
  attributes: ['position'],
})
  
module.exports.delUser = (id)=>{
 return User.destroy({ where: { id } }).then((res) => allUsers(socket))
}
  

module.exports.addNewDepartment = ({range, department, position})=>{
  let uid = uuidv4();
  return Range.create({ id: uid, range, department, position, }).then((res)=> getDepartamentsUsers())
}
  
module.exports.allDeps = ()=>
  Range.findAll({ order: ['department'] })

module.exports.getUserBySearch = (text)=>{
  if (text == null) text = '';
  return User.findAll({
  where: { name: { [Op.iLike]: `%${text}%` } },
  attributes: ['name', 'img', 'id'],
})
}

  
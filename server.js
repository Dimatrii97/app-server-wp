const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cookieParser = require('cookie-parser');
const routerMessages = require('./routes/messages.routes');
const routerTasks = require('./routes/tasks.routes');
const routerUser = require('./routes/user.routes');
const Token = require('./token/index');

const messageController = require('./controlers/message.controler');
const taskController = require('./controlers/task.controler');

app.use(express.json());
app.use(cookieParser('secret key'));

app.use(
  cors({
    origin: ['http://localhost:8080', 'https://localhost:8080'],
    credentials: true,
    exposedHeaders: ['set-cookie'],
  })
);

app.use(express.urlencoded({ extended: false }));

app.use('/api', routerMessages);
app.use('/api', routerTasks);
app.use('/api', routerUser);

app.get('/api/news/', (req, res) => {
  const data = require('./news.json');
  res.json(data);
});

io.use(function (socket, next) {
  if (socket.handshake.query && socket.handshake.query.token) {
    try {
      Token.AccessVerify(socket.handshake.query.token);
      socket.decoded = Token.getAccessPayload(socket.handshake.query.token);
      next();
    } catch (error) {
      console.log(error);
      return next(new Error('Authentication error'));
    }
  } else {
    console.log('no token');
    next(new Error('Authentication error'));
  }
}).on('connection', function (socket) {
  console.log('connect');
  socket.join(socket.decoded.id);

  socket.on('searchUsersByName', function (name) {
    require('./controlers/user.controler')
      .getUserBySearch(name)
      .then((users) => {
        socket.emit('searchUsers', users);
      });
  });

  socket.on('newMessUsers', async function ({ toid, text, date }) {
    try {
      const message = await messageController.createNewMessage(
        socket.decoded.id,
        toid,
        text,
        date
      );
      console.log(message);
      socket.to(message.toid).emit('SetNewMess', message.dataValues);
      socket.emit('SetNewMess', message.dataValues);
    } catch (error) {
      console.log(error);
      socket.emit('error', { message: 'Не удалось отправить сообщение' });
    }
  });

  socket.on('updateViewedMess', async function (id) {
    try {
      const ok = await messageController.updateViewedMessage(
        socket.decoded.id,
        id
      );
      socket.to(id).emit('updateScanned', socket.decoded.id);
      // socket.emit('updateScanned', id);
      socket.emit('updateAllScanned');
      socket.to(id).emit('updateAllScanned');
    } catch (error) {
      console.log(error);
      socket.emit('error');
    }
  });

  socket.on('setTask', async function (data) {
    const { task, executor } = await taskController.setTask(
      socket.decoded.id,
      data
    );

    // let { id, title, deadline, startdate, color, type } = task.dataValues;
    for (const user of executor) {
      if (io.nsps['/'].adapter.rooms[user.id]) {
        socket.to(user.id).emit('newTasksOnline', {
          ...task,
          executor,
        });
      }
    }
  });

  socket.on('getTaskById', async function (id) {
    try {
      const TaskAdditional = await taskController.taskById(id);
      socket.emit('setTaskAdditional', TaskAdditional);
    } catch (error) {
      console.log(error);
      socket.emit('error');
    }
  });

  socket.on('updateSubtasks', async function (id) {
    try {
      console.log('==================================');
      const updateTask = await taskController.updateSubtasks(id);
      socket.emit('updatedSubtask', updateTask);
    } catch (error) {
      console.log(error);
      socket.emit('error');
    }

    // for (const user of TasksUser.users) {
    //   if (io.nsps['/'].adapter.rooms[user.id]) {
    //     socket
    //       .to(user.id)
    //       .emit('updatedSubtask', {
    //         idTask: TasksUser.id,
    //         idSubtasks: id,
    //       });
    //   }
    // }
  });

  socket.on('completeTask', async function (id) {
    try {
      const { users, id } = await taskController.complite(id);
      socket.emit('closeTask', id);
      for (const user of users) {
        if (io.nsps['/'].adapter.rooms[user.id]) {
          socket.to(user.id).emit('closeTask', id);
        }
      }
    } catch (error) {
      console.log(error);
      socket.emit('error', id);
    }
  });

  socket.on('updateViewedTask', async function (id) {
    try {
      await taskController.updateViewed(id);
      socket.emit('updateViewedTask', id);
    } catch (error) {
      console.log(error);
      socket.emit('error');
    }
  });

  // socket.join(socket.decoded.id);
  // socket.on('disconnect', function (data) {
  //   socket.leave(socket.decoded.id);
  // });
  // require('./socket/user')
  //   .getUser(socket, ['position'], socket.decoded.id)
  //   .then((user) => {
  //     if (user[0].position === 'admin') {
  //       socket.emit('setRoleAdmin');
  //     }
  //   });
  //message
  // socket.on('getUserLastMess', function () {
  //   require('./socket/messages')
  //     .getUserLastMess(socket)
  //     .then((users) => {
  //       socket.emit('setUserLastMess', users);
  //     })
  //     .catch((error) => console.log(error));
  // });
  // TODO:Socket

  // TODO:Socket

  // socket.on('getuserMessages', function ({ id, offset }) {
  //   require('./socket/messages')
  //     .getuserMessages(socket, id, offset)
  //     .then((mess) => {
  //       mess = mess.reverse();
  //       socket.emit('setuserMessages', mess);
  //     });
  // });

  //User
  // socket.on('adminNewUser', function (data) {
  //   require('./socket/user')
  //     .adminNewUser(socket, data)
  //     .then((users) => socket.emit('allUsers', users));
  // });

  // socket.on('getpositions', function (data) {
  //   require('./socket/user')
  //     .getpositions(data)
  //     .then((tableRange) => {
  //       socket.emit('setPosition', tableRange);
  //     });
  // });

  // socket.on('delUser', function (id) {
  //   require('./socket/user')
  //     .delUser(id)
  //     .then((users) => socket.emit('allUsers', users));
  // });

  // socket.on('addNewDepartment', function (data) {
  //   require('./socket/user')
  //     .addNewDepartment(data)
  //     .then((tableRange) => {
  //       socket.emit('setDepartaments', tableRange);
  //     });
  // });

  // socket.on('getDepartamentsUsers', function () {
  //   require('./socket/user')
  //     .getDepartamentsUsers()
  //     .then((tableRange) => {
  //       socket.emit('setDepartaments', tableRange);
  //     });
  // });

  socket.on('allDeps', function () {
    require('./socket/user')
      .allDeps()
      .then((users) => {
        socket.emit('allDeps', users);
      });
  });

  socket.on('allUsers', function () {
    if (socket.decoded.id == '1') {
      require('./socket/user')
        .allUsers(socket, ['name', 'id', 'img', 'position', 'department'])
        .then((users) => {
          socket.emit('allUsers', users);
        });
      // } else {
      //   require('./socket/user')
      //     .allUsers(socket, ['name', 'id', 'img'])
      //     .then((users) => {
      //       socket.emit('allUsers', users);
      //     });
    }
  });

  // socket.on('getUsersDepartment', function (data) {
  //   require('./socket/user')
  //     .getUsersDepartment(socket)
  //     .then((users) => {
  //       socket.emit('currentUsers', users);
  //     });
  // });
  // socket.on('getUser', function (data) {
  //   require('./socket/user')
  //     .getUser(socket)
  //     .then((user) => {
  //       socket.emit('currentUser', user[0]);
  //     });
  // });

  // socket.on('getUserById', function (id) {
  //   require('./socket/user')
  //     .getUser(socket, ['name', 'img', 'id'], id)
  //     .then((user) => {
  //       socket.emit('currentUsers', user);
  //     });
  // });

  //==============admin
  // TODO:Socket

  // TODO: getTasksByUserId
  // socket.on('getTasks', function (data) {
  //   getTaskTitle(socket);
  // });

  // TODO:Socket

  // TODO:Socket

  // TODO:Socket
});

http.listen(5000, function () {
  console.log('Express serving on 5000!');
});

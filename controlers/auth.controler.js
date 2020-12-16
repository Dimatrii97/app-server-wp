const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
module.exports = (req, res)=>{
  
  User.findOne({where:{login: req.body.login}}).then((user)=>{
    if(user) {
      let passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
      if(passwordIsValid) {
        const token = jwt.sign({
          login:user.login,
          id:user.id
        }, 'ss',{expiresIn:1000*60})
        let resBody = {}
         resBody.data = {
          token,
          user:{
          age: user.age,
          department: user.department,
          email: user.email,
          id: user.id,
          img: user.img,
          login: user.login,
          name: user.name,
          position: user.position,
          range: user.range,
          tel: user.tel,
        }};
        if(user.position === "admin"){
           resBody.data.is_admin = 1
        }
        res.json(resBody)
      } else {
        res.status(401).json({message:"Неверный пароль или логин"})
      }
    }
    else {
      res.status(401).json({message:"Неверный пароль или логин"})
    }
  })

}
const controler = require('../controlers/user.controler');
const { Router } = require('express');
const router = Router();

router.post('/api/user/login', async (req, res) => {
  const { login, password } = req.body;

  const answer = await controler.login(login, password);
  res.status(answer.status || 200).json(answer);
});
'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./models/users/users-model.js');
const auth = require('./middleware.js');
const oauth = require('./oauth/google.js');
const Role = require('./models/users/roles-model.js');

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then( (user) => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
    })
    .catch(next);
});

authRouter.post('/signin', auth(), (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

authRouter.get('/oauth', (req,res,next) => {
  oauth.authorize(req)
    .then( token => {
      res.status(200).send(token);
    })
    .catch(next);
});

authRouter.post('/key', auth(), (req,res,next) => {
  let key = req.user.generateKey();
  res.status(200).send(key);
});

authRouter.post('/roles', (req,res,next) => {
  let role = new Role(req.body);
  role.save()
    .catch(next);
  res.send('Done');
});

module.exports = authRouter;

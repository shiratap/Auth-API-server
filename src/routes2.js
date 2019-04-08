'use strict';

const express = require('express');
const router = express.Router();
const auth = require('./middleware.js');


router.get('/public-stuff', (req,res,next) => {
  res.status(200).send('You can get here!');
});
router.get('/hidden-stuff', auth(),(req,res,next) => {
  res.status(200).send('You only got here with a login');
});
router.get('/something-to-read', auth('read'),(req,res,next) => {
  res.status(200).send('You only got here with a read permission');
});
router.post('/create-a-thing', auth('create'),(req,res,next) => {
  res.status(200).send('You only got here with a create permission');
});
router.put('/update', auth('update'),(req,res,next) => {
  res.status(200).send('You only got here with a update permission');
});
router.patch('/jp', auth('update'),(req,res,next) => {
  res.status(200).send('You only got here with a update permission');
});
router.delete('/bye-bye', auth('delete'),(req,res,next) => {
  res.status(200).send('You only got here with a delete permission');
});
router.get('/everything', auth('superuser'),(req,res,next) => {
  res.status(200).send('You only got here with a superuser permission');
});


module.exports = router;
const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.get('/messages', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  })
  router.get('/messages', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  })
  router.post('/messages', (req, res) => {
    const message = new Message(req.body);
    message.save((err) =>{
      if(err)
        sendStatus(500);
      io.emit('messages', req.body);
      res.sendStatus(200)})
    });

    module.exports = app => app.use('/auth', router);
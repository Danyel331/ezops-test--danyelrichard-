const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname))
const Message = mongoose.model('Message',{
    name : String,
    message : String
  })
  const MongoClient = require ('mongodb'). MongoClient;
const uri = "mongodb+srv://danyel:<danyel>@cluster0.gcfmf.mongodb.net/<AppEzops.messages>?retryWrites=true&w=majority";
const novo = MongoClient (uri, { useNewUrlParser: true });


  app.get('/messages', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  })
  
  
  app.get('/messages/:user', (req, res) => {
    var user = req.params.user
    Message.find({name: user},(err, messages)=> {
      res.send(messages);
    })
  })
  
  
  app.post('/messages', async (req, res) => {
    try{
      const messages = new Messages(req.body);
  
      const savedMessage = await message.save()
        console.log('saved');
  
      const censored = await Messages.findOne({message:'badword'});
        if(censored)
          await Messages.remove({_id: censored.id})
        else
          io.emit('messages', req.body);
        res.sendStatus(200);
    }
    catch (error){
      res.sendStatus(500);
      return console.log('error',error);
    }
    finally{
      console.log('Messages Posted')
    }
  
  })
  
  io.on('connection', () =>{
    console.log('a user is connected')
  })
  
  

app.listen(3000);
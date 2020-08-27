const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

const uri = "mongodb+srv://danyel:danyel@cluster0.gcfmf.mongodb.net/AppEzops?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname))

const Message = mongoose.model('Message', {
  name: String,
  message: String
})

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://danyel:<danyel>@cluster0.gcfmf.mongodb.net/<AppEzops.messages>?retryWrites=true&w=majority";
// const novo = MongoClient(uri, { useNewUrlParser: true });



app.get('/messages', async (req, res) => {
  console.log("Get no banco")
  const result = await Message.find()
  Message.fi
  return res.send(result)
})



app.get('/messages/:user', (req, res) => {
  var user = req.params.user
  Message.find({name: user},(err, messages)=> {
    res.send(messages);
  })
})


app.post('/messages', async (req, res) => {
  const result = await Message.create(req.body)
  console.log(result)
  return res.json(result)
})

// app.post('/messages', async (req, res) => {
//   try{
//     const messages = new Message(req.body);

//     const savedMessage = await messages.save
//       console.log('saved', savedMessage());

//     const censored = await Message.findById(req.body)
//       if(censored)
//         await messages.remove({_id: censored.id})
//       else
//         io.emit('messages', req.body);
//       res.sendStatus(200);
//   }
//   catch (error){
//     res.sendStatus(500);
//     return console.log('error',error);
//   }
//   finally{
//     console.log('Messages Posted')
//   }

// })

io.on('connection', () =>{
  console.log('a user is connected')
})

app.use(cors())

const server = http.listen(3000, () => {
  console.log('server is running on port', server.address().port);
});
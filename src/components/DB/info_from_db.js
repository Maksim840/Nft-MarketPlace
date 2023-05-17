const express = require('express');
const mongoose = require('mongoose');
const { createServer } = require('http');
const app = express();
const port = 3001;

mongoose
  .connect('mongodb+srv://Maksim:Pas123@maksim.ppszojk.mongodb.net/nft-cards', {
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDb connected'))
  .catch(err => console.log(err));

const UsersSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Cards = mongoose.model('Cards', UsersSchema);

app.get('/api', (req, res) => {
  Cards.find()
    .then(cards => {
      res.json(cards);
    })
    .catch(err => res.send(err));
});

const server = createServer(app);
server.listen(port, () => console.log(`server is up. port: ${port}`));

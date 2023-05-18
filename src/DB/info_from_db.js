const express = require('express');
const mongoose = require('mongoose');
const { createServer } = require('http');
const app = express();
const port = 3000;

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
    type: String,
    required: true,
  },
});

const Cards = mongoose.model('Cards', UsersSchema);
let data = null
app.get('/api', (req, res) => {
  Cards.find()
    .then(cards => {
      data = cards; 
      res.send('Data fetched successfully.'); 
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error fetching data.'); 
    });
});

const server = createServer(app);
server.listen(port, () => console.log(`server is up. port: ${port}`));
export default data;
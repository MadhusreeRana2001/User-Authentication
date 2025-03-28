const connectToMongo = require('./db');
const express = require('express');
let cors = require('cors'); 

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/auth', require('./auth'));

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
})

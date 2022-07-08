const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const server = http.createServer(app);

const port = process.env.PORT || 8080;

mongoose.connect(process.env.mongo_URL)
  .then(() => console.log('Database up and doing:::'))
  .catch(err => console.log(`Database Connection error: ${err.message}`));

server.listen(port, () => console.log(`Server listenig on::: ${port}`));
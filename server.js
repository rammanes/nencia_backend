const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
var paystack = require("paystack-api")("sk_test_b091683092bc48ecb3956f0456fecb880f87a579");

dotenv.config();

const server = http.createServer(app);

const port = process.env.PORT || 8080;

mongoose.connect(process.env.mongo_URL)
  .then(() => console.log('Database up and doing:::'))
  .catch(err => console.log(`Database Connection error: ${err.message}`));

 // Second Option
// paystack.{resource}
// paystack.customer.list()
// 	.then(function(body) {
//   		console.log(body);
// 	})
// 	.catch(function(error) {
// 		console.log(error);
// 	});

server.listen(port, () => console.log(`Server listenig on::: ${port}`));
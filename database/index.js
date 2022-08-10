const mongoose = require('mongoose');
const config = require('../config');

mongoose
  .connect(config.mongoose.url)
  .then(() => {
    console.log('Connected to Mongodb Atlas');
  })
  .catch((error) => {
    console.log(error);
  });

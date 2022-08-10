const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
});

module.exports = {
  port: process.env.PORT || 3000,
  bcrypt: {
    saltRounds: 10,
  },
  mongoose: {
    url: process.env.MONGOOSE,
  },
  jwt_secret: process.env.JWT_SECRET,
};

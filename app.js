const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');

require('./database');
app.use(cors());
app.use(bodyParser.json());
app.use(require('./routes'));

module.exports = server;

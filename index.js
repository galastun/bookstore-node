require('dotenv').config();

const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.port || 8888;

app.use(routes);

app.listen(port);

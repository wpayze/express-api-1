const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}`));
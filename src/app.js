const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

app.use(express.json());
app.use('/tasks', tasks);

module.exports = app;

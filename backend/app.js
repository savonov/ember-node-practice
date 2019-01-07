const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors')

const indexRouter = require('./routes/index');
const exercisesRouter = require('./routes/exercise');
const taskRouter = require('./routes/task');

const app = express();

app.use(cors())
app.use('/api/', indexRouter);
app.use('/api/exercises', exercisesRouter);
app.use('/api/tasks', taskRouter);

app.use(function (req, res, next) {
  next(createError(404));
});


module.exports = app;
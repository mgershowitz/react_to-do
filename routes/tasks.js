const express     = require('express');
const tasks       = express.Router();

/* get the database middleware */
const db           = require('../models/task');

/* convenience method for sending */
const sendJSONresp = (req,res)=>res.json(res.rows)

tasks.route('/:taskID')
  .get((req,res)=>res.send(`showed task ${req.params.taskID}`))
  .put((req,res)=>res.send(`edited task ${req.params.taskID}`))
  .delete((req,res)=>res.send(`deleted task ${req.params.taskID}`))

tasks.route('/')
  .get((req,res)=>res.send('show tasks'))
  .post((req,res)=>res.send('posted new task'))


module.exports = tasks;

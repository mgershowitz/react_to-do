'use strict'
const express = require('express')
const tasks   = express.Router();

let taskList = [];

tasks.route('/:taskID')
  .get((req,res) => res.json(tasks))
  .put((req,res) => res.json(tasks))
  .delete((req,res) => res.json(tasks))

tasks.route('/')
  .get((req,res) => {res.json(res.rows)})
  .post((req,res) => {res.json(tasks)})


module.exports = tasks;

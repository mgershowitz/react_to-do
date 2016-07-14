'use strict'
const pg = require('pg-promise')({
// Initialization Options
});
const config = {
host:       process.env.DB_HOST,
port:       process.env.DB_PORT,
database:   process.env.DB_NAME,
user:       process.env.DB_USER,
password:   process.env.DB_PASS,
};

const _db = pg(config);

module.exports = {
  /* GET TASK*/
  getTasks(req,res,next) {
    _db.any(`SELECT * FROM tasks;`)
       .then( tasks => {
        res.rows = tasks;
        next()
       })
       .catch( error => {
        console.error('Error', error)
       })
  },
  /* POST /tasks/ creates a new oneADD TASK*/
  addTask(req,res,next) {
    console.log('=====', req.body)
    _db.any(
      `INSERT INFO
      tasks (taskname, task_desc)
      VALUES ($/name/, $/desc/)
      returing *;`, req.body
    )
    .then(task => {
      console.log('Added task successfully');
      res.rows = task;
      next()
    })
    .catch(error =>{
      console.error('Error in ADDING TASK', error)
    })
  },

  /* PUT /tasks/:id*/
  updateTask(req,res,next) {
    req.body.tID = Number.parseInt(req.params.taskID)
    req.body.completed = !!req.body.completed;
    _db.one(
      `UPDATE tasks
      SET task_name = $/task_name/
      task_desc = $/task_desc/
      completed = $/completed/
      task_start_time = $/task_start_time/
      task_stop_time = $/task_stop_time/
      WHERE task_id = $/tID/
      returing *;`, req.body
    )
    .then(task => {
      console.log('Update task successfully');
      res.rows = task;
      next()
    })
    .catch(error =>{
      console.error('Error in Updating TASK', error)
    })
  },

  deleteTask(req,res,next) {
    const tID = Number.parseInt(req.params.taskID)
    _db.none(
      `DELETE FROM tasks
      WHERE task_id = $1;`, [tID]
    )
    .then(() => {
      console.log('Deleted task successfully');
      next()
    })
    .catch(error =>{
      console.error('Error in DELETE TASK', error)
    })
  }
}





















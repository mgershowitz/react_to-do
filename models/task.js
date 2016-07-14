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

  /* GET /tasks */
  getTasks(req, res, next) {
    _db.any("SELECT * from tasks;")
      .then( tasks=>{
        res.rows = tasks;
        next()
      })
      .catch( error=>{
        console.error('Error ', error);
      })
  },

  /* POST /tasks */
  /* creates a new task, returns the newly created record */
  addTask(req, res, next) {
    console.log('===addTask===',req.body)
    _db.any(
      `INSERT INTO
      tasks (task_name, task_desc)
      VALUES ( $/name/, $/desc/ )
      returning *;` , req.body
      )
      .then( task=>{
        console.log('ADDED TASK SUCCESSFUL');
        res.rows = task;
        next();
      })
      .catch(error=>{
        console.error('ERROR in ADDING TASK!', error);
      })
  },
  /* PUT /tasks/:id */
  updateTask(req, res, next) {},

  /* DELETE /tasks/:id */
  deleteTask(req, res, next) {},
}













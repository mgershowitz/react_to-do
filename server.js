'ues strict'

const express = require('express')
const morgan  = require('morgan')
const path    = require('path')
//const favicon = require('serve-favicon');
const app     = express()
const port    = process.argv[2] || process.env.PORT || 3009

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'dist')))
//app.use(express.favicon(path.join(__dirname, 'public','images')));

app.listen(port, ()=>{
  console.log('Server chillin at ', port)
})

app.route('/tasks/:id')
  .get((req,res) => res.send(`show task ${req.params.id}`))
  .put((req,res) => res.send(`edit task ${req.params.id}`))
  .delete((req,res) => res.send(`delete task ${req.params.id}`))

app.route('/tasks')
  .get((req,res) => {res.send('show tasks')})
  .post((req,res) => {res.send('posted new task')})

app.get('/', (req,res)=>{
  res.send('home')
})




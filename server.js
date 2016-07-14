'ues strict'

const env         = process.env.NODE_ENV || 'development';
const DEV         = env === 'development';
const dotenv      = (DEV) ? require('dotenv').config() : undefined;
const express     = require('express')
const morgan      = require('morgan')
const path        = require('path')
const bodyParser  = require('body-parser')
const app         = express()
const taskRoute   = require('./routes/tasks')
const port        = process.argv[2] || process.env.PORT || 3009

app.use(morgan('dev'))
app.set(express.static(path.join(__dirname,'dist')))
app.use(bodyParser.json());

app.listen(port, ()=>{
  console.log('Server chillin at ', port)
})


app.use('/tasks', taskRoute)


app.get('/', (req,res)=>{
  res.send('home')
})




import React from 'react'
import Task from './Task.jsx'

const TaskList = props=>

  <div className="list-group">
    {Object.keys(props.tasks)
      .filter(key=>props.filter(props.tasks[key]))
      .map(key=>
        <Task
          key={key}
          onClick={event=>props.buttonClick(key)}
          task={props.tasks[key]}
          deleteClick={()=>props.deleteClick(key)}
          children={props.children} />
      )}
  </div>

export default TaskList

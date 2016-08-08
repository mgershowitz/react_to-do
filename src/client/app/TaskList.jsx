import React from 'react'
import Task from './Task.jsx'

const TaskList = props=>

  <div className="list-group">
    {Object.keys(props.tasks)
      .filter( task_id=> props.filter(props.tasks[task_id]) )
      .map( task_id=>
        <Task
          key={task_id}
          onClick={event=>props.buttonClick(task_id)}
          task={props.tasks[task_id]}
          deleteClick={()=>props.deleteClick(task_id)}
          children={props.children} />
      )}
  </div>

export default TaskList

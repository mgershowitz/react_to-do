import React from 'react'
import Task from './Task.jsx'


const cloneAndAssignClickHandler = (children,id) =>
  React.Children.map(children, child=>
    /* We have to clone our children because props are READ-ONLY*/
    React.cloneElement(child, {
      /* our child needs some modified behavior*/
      click: ()=>child.props.click(id)
    })
  )


const TaskList = props=>

  <div className="list-group">
    {Object.keys(props.tasks)
      .filter( task_id=> props.filter(props.tasks[task_id]) )
      .map( task_id=>
        <Task
          key={task_id}
          onClick={event=>props.buttonClick(task_id)}
          task={props.tasks[task_id]}>

          {cloneAndAssignClickHandler(props.children, task_id)}

        </Task>
      )}
  </div>

TaskList.propTypes = {
  tasks: React.PropTypes.object.isRequired,
  filter: React.PropTypes.func.isRequired,
  children:React.PropTypes.object,
};
export default TaskList

import Task           from './Task.jsx'
import TaskForm       from './TaskForm.jsx'

const TaskList = props=>{

  /* Render a Task */
  const renderTask = task_id=>{

    /* If the form is open, render the inline taskForm*/
    if(props.tasks[task_id].formOpen) {

      return (
        <aside className="well well-sm" key={task_id}>
          <TaskForm
            size="sm"
            saveTask={(name,desc)=>{
              props.saveTask(task_id,name,desc)
              props.closeTaskForm(task_id)
            }}
            task={props.tasks[task_id]}>

            <button type="submit" className="btn btn-primary btn-sm">Save</button>
            <button type="reset"  className="btn btn-link btn-sm" onClick={event=>props.closeTaskForm(task_id)}>Cancel</button>

          </TaskForm>
        </aside>
      )

    }

    /*These are our children (the edit and delete buttons).*/
    const kids = React.Children.map( props.children, child=>
      /* props.children is READ-ONLY so we have to clone the child in order to give it an ID*/
      React.cloneElement( child, {
        id:task_id
      })
    )

    /* Otherwise, render the Task */
    return (
      <Task
        onClick={event=>props.onClick(task_id)}
        task={props.tasks[task_id]}
        key={task_id}>
        {kids}
      </Task>
    )
  }


  /* Loop over the tasks, fiter out tasks we dont want and render using the functions above */
  return (
    <div className="list-group">
      {Object.keys(props.tasks)
        .filter( task_id=> props.filter(props.tasks[task_id]) )
        .map(renderTask)
      }
    </div>
  )
}



TaskList.propTypes = {
  tasks:      React.PropTypes.object.isRequired,
  filter:     React.PropTypes.func.isRequired,
  onClick:    React.PropTypes.func.isRequired,
  saveTask:   React.PropTypes.func,
  closeTaskForm: React.PropTypes.func,

  /* we might have a child, or an array of children*/
  children:   React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])
};

export default TaskList


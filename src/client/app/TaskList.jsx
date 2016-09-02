import Task from './Task.jsx'
import TaskForm from './TaskForm.jsx'

const TaskList = props=>{

  function renderTask( task_id ){

    /*
    These are our children (the edit and delete buttons).
    We have to clone them if we want to give them any attributes.
    We'll just give each child a taskID, so it can fire its methods in its own context

    We may or may not have children.
    Luckily React.Children.map iterates over our children (if we have any)
    */
    const kids = React.Children.map( props.children, child=>
      /* props.children is READ-ONLY so we have to clone the supplied child*/
      React.cloneElement( child, {
        id:task_id
      })
    )
    const task = props.tasks[task_id];

    if(task.formOpen){
      return (
        <aside className="well well-sm" key={`${task_id}-form`}>
          <TaskForm
            size="sm"
            saveTask={(name,desc)=>{
              props.saveTask(task_id,name,desc)
              props.closeTaskForm(task_id)
            }}
            task={task}
            id={task_id}>
            <button type="submit" className="btn btn-primary btn-sm">Save</button>
            <button type="reset" className="btn btn-primary btn-sm" onClick={event=>props.closeTaskForm(task_id)}>Cancel</button>
          </TaskForm>
        </aside>
      )
    }

    return (
      <Task
        onClick={event=>props.onClick(task_id)}
        task={task}
        id={task_id}
        key={task_id}>
        {kids}
      </Task>
    )

  }



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


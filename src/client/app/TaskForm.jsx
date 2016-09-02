const TaskForm = props=> {

  const size = props.size || 'lg'
  const task = props.task || {}
  const buttonText = props.buttonText || 'Add Task'


  const handleSubmit = event=>{
    event.preventDefault();

    // fired the App's prop function
    props.saveTask(
      event.target.elements.task_name.value,
      event.target.elements.task_desc.value
    );

    // clear the form
    event.target.reset();
  }


  return (
      <form className="form-inline" onSubmit={handleSubmit}>

        <div className="form-group">
          <label className="sr-only" htmlFor="task_name">Task Name</label>
          <input type="text" className={`form-control input-${size}`} name="task_name" placeholder="Task Name" defaultValue={task.task_name}/>
        </div>

        <div className="form-group">
          <label className="sr-only" htmlFor="task_desc">Task Description</label>
          <input type="text" className={`form-control input-${size}`} name="task_desc" placeholder="Task Description" defaultValue={task.task_desc}/>
        </div>

        {React.Children.map(props.children, child=>child)}
      </form>

  )

}
/* PROP TYPES */
TaskForm.propTypes={
  saveTask: React.PropTypes.func.isRequired
}

export default TaskForm

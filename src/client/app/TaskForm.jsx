const TaskForm = props=> {

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
          <input type="text" className="form-control input-lg" name="task_name" placeholder="Task Name" />
        </div>

        <div className="form-group">
          <label className="sr-only" htmlFor="task_desc">Task Description</label>
          <input type="text" className="form-control input-lg" name="task_desc" placeholder="Task Description" />
        </div>

        <button type="submit" className="btn btn-info btn-lg">Add Task</button>
      </form>

  )

}
/* PROP TYPES */
TaskForm.propTypes={
  saveTask: React.PropTypes.func.isRequired
}

export default TaskForm

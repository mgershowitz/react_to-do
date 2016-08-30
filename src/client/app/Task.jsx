const Task = props=>
  /* pass props down from our parent */
  <button type="button"
    className="list-group-item"
    onClick={props.onClick}>

    {/* text on the button */}
    <strong>{props.task.task_name}</strong> {props.task.task_desc}

    {/* any children given to me shall be rendered here */}
    {props.children}
  </button>


export default Task

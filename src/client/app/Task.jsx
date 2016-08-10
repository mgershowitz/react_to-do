import React from 'react'

const Task = props=>
  /* pass props down from our parent */
  <button type="button"
    className="list-group-item"
    onClick={props.onClick}>

    {/* text on the button */}
    <strong>{props.task.name}</strong> {props.task.desc}

    {/* any children given to me shall be rendered here */}
    {props.children}
  </button>

Task.propTypes = {
  task: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired,
  children:React.PropTypes.array,
};

export default Task

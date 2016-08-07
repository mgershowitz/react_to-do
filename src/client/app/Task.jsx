import React from 'react'

const Task = props=>
  /* pass props down from our parent */
  <button
    type="button"
    className="list-group-item"
    onClick={props.onClick}>
      {/* text on the button */}
      <strong>{props.task.name}</strong> {props.task.desc}
      {React.Children.map(props.children, child=>
        React.cloneElement(child, {
          click: props.deleteClick
        })
      )}
  </button>


export default Task

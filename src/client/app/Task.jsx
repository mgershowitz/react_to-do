import React from 'react'

const Task = props=>
  /* pass props down from our parent */
  <button
    type="button"
    className="list-group-item"
    onClick={props.onClick}>
      {/* text on the button */}
      <strong>{props.task.name}</strong> {props.task.desc}

      {/* props.children may NOT be an array, so let's use this convenience function */}
      {/* see https://facebook.github.io/react/docs/top-level-api.html#react.children */}
      {React.Children.map(props.children, child=>
        /* We have to clone our children because props are READ-ONLY*/
        React.cloneElement(child, {
          /* our child needs some behavior*/
          click: props.deleteClick
        })
      )}
  </button>


export default Task

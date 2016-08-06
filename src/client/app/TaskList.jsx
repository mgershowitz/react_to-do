import React from 'react'

export default function TaskList(props){

  // create a function to generate one button, given a key ID
  const createButton = key=>
    // remember there's an implicit return here
    // every dynamically-generated element needs a key for React to track it
    <button
      type="button"
      className="list-group-item"
      key={key}>

        {/* text on the button */}
        <strong>{props.tasks[key].name}</strong> {props.tasks[key].desc}

    </button>


  return (
    <div className="list-group">
      {Object.keys(props.tasks).map(createButton)}
    </div>
  )

}

import React from 'react'

const DeleteButton = props=>{

  const handleClick = event=>{
    event.stopPropagation()
    props.click()
  }

  return (
    <a className="pull-right" onClick={handleClick}>
      <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
    </a>
  )
}


export default DeleteButton

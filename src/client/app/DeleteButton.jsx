import React from 'react'

const DeleteButton = props=>{

  const handleClick = event=>{
    /* kill the link action here */
    event.stopPropagation()
    /*trigger the provided function*/
    props.click()
  }

  return (
    <a href="#" className="pull-right" onClick={handleClick}>
      <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
    </a>
  )
}


export default DeleteButton

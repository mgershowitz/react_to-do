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

/* PROP TYPES */
DeleteButton.propTypes={
  click: React.PropTypes.func.isRequired
}

export default DeleteButton

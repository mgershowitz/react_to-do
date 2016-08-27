const IconButton = props=>{
  const handleClick = event=>{
    /* kill the link action here */
    event.stopPropagation()
    /*trigger the provided function*/
    props.onClick(props.id)
  }

  return (
    <a className="pull-right" onClick={handleClick}>
      <span className={`glyphicon glyphicon-${props.icon}`} aria-hidden="true"></span>
    </a>
  )
}

export default IconButton


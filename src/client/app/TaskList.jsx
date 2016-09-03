import ToggleableTask  from './ToggleableTask.jsx'

function cloneTask(taskID, props, propsContext){
  return React.Children.map( props.children, child=>
    /* props.children is READ-ONLY so we have to clone the child in order to give it an ID*/
    React.cloneElement(
      child,
      propsContext,
      cloneTask(taskID, child.props, propsContext)
    )
  )
}

const TaskList = props=>{

  /* Loop over the tasks, fiter out tasks we dont want and render using the functions above */
  return (
    <div className="list-group">
      {Object.keys(props.tasks)
        .filter( taskID=> props.filter(props.tasks[taskID]) )
        .map(taskID=>
          cloneTask(taskID, props, {id:taskID,task:props.tasks[taskID]})
        )
      }
    </div>
  )
}



TaskList.propTypes = {
  tasks:      React.PropTypes.object.isRequired,
  filter:     React.PropTypes.func.isRequired,


  /* we might have a child, or an array of children*/
  children:   React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])
};

export default TaskList


import Task from './Task.jsx'

const TaskList = props=>

  <div className="list-group">
    {Object.keys(props.tasks)
      .filter( task_id=> props.filter(props.tasks[task_id]) )
      .map( task_id=>
        <Task
          onClick={event=>props.onClick(task_id)}
          task={props.tasks[task_id]}
          id={task_id}
          key={task_id}>

        {/* These are our children (the edit and delete buttons).
          We have to clone them if we want to give them any attributes.
          We'll just give each child a taskID, so it can fire its methods in its own context */}

        {/* We may or may not have children.
            Luckily React.Children.map iterates over our children (if we have any)
        */}

          {React.Children.map( props.children, child=>
            /* props.children is READ-ONLY so we have to clone the supplied child*/
            React.cloneElement( child, {
              id:task_id
            })
          )}

        </Task>
      )
    }
  </div>



TaskList.propTypes = {
  tasks:      React.PropTypes.object.isRequired,
  filter:     React.PropTypes.func.isRequired,
  onClick:    React.PropTypes.func.isRequired,

  /* we might have a child, or an array of children*/
  children:   React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])
};

export default TaskList


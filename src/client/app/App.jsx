// import the libs we need
import ReactDOM         from 'react-dom'
import Nav              from './Nav.jsx'
import Footer           from './Footer.jsx'
import TaskForm         from './TaskForm.jsx'
import TaskList         from './TaskList.jsx'
import IconButton       from './IconButton.jsx'
import Task             from './Task.jsx'

// create a React Component called _App_
export default class App extends React.Component{

  // note that classes do **not** have commas between their methods
  // every class gets a constructor.
  // this is where we init the state.
  constructor() {

    // we also need to wake up our ancestors
    super();

    // here's our state
    this.state = {
      tasks : {}
    }
  }



  /* CREATE a task */
  addTask( newTask ){

    // TODO: send this change to the db (ajax)
    newTask.completed = false
    newTask.task_id = Date.now()
    newTask.deleted = false

    // const newState = {...this.state.tasks}
    // newState[newTask.task_id]=newTask
    // this.setState(newState)

    this.setState( previousState=>{
      previousState.tasks[newTask.task_id]=newTask
      return previousState
    })
  }

  getTask(id){
    return this.state.tasks[id]
  }

  /*TODO: THIS SHOULD BE REFACTORED, since these are 99% identical */

  /* open/close a task. Note, we only need to ID to make this work */
  toggleCompleted(task_id){
    this.setState( previousState=>{
      // toggle the completed state of the task
      previousState.tasks[task_id].completed = !previousState.tasks[task_id].completed
      return previousState
    })
  }

  convertEdit(task_id){
    console.log("convertEdit",task_id)
  }

  toggleDelete(task_id){
    this.setState( previousState=>{
      // toggle the completed state of the task
      previousState.tasks[task_id].deleted = !previousState.tasks[task_id].deleted
      return previousState
    })
  }

  // 90% of your components will render()
  // REMEMBER you can only return **one** root element from a render fn.
  render(){
    return(
      <container>
        <header>
          <Nav />
        </header>
        <div className="container">
          <section className="row">

            {/* TASK FORM */}
            <TaskForm addTask={this.addTask.bind(this)}/>


            {/*OPEN ITEMS*/}
            <article className="col-md-5">
              <h3>Open Items</h3>

              <TaskList
                filter={task=>!task.completed && !task.deleted}
                onClick={this.toggleCompleted.bind(this)}
                tasks={this.state.tasks}>
              </TaskList>

            </article>


            {/* COMPLETED ITEMS */}
            <article className="col-md-5">
              <h3>Completed Items</h3>

              <TaskList
                filter={task=>!!task.completed && !task.deleted }
                onClick={this.toggleCompleted.bind(this)}
                tasks={this.state.tasks}>
                  <IconButton onClick={this.toggleDelete.bind(this)} icon="trash" />
                  <IconButton onClick={this.convertEdit.bind(this)} icon="pencil" />
              </TaskList>

            </article>


          {/* DELETED ITEMS */}
            <article className="col-md-2">
              <h3>Deleted Items</h3>

              <TaskList
                filter={task=>!!task.deleted}
                onClick={this.toggleDelete.bind(this)}
                getTask={this.getTask.bind(this)}
                tasks={this.state.tasks}>

              </TaskList>

            </article>
          </section>
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </container>
      )
  }
}

// mount our App at #container
ReactDOM.render(<App/>, document.querySelector('#container'))

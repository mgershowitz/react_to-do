// import the libs we need
import React            from 'react'
import ReactDOM         from 'react-dom'
import Nav              from './Nav.jsx'
import Footer           from './Footer.jsx'
import TaskForm         from './TaskForm.jsx'
import TaskList         from './TaskList.jsx'

// create a React Component called _App_
export default class App extends React.Component{

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


  // note that classes do **not** have commas between their methods
   // note that classes do **not** have commas between their methods
  addTask( newTask ){

    // TODO: send this change to the db (ajax)
    newTask.completed = false
    newTask.task_id = Date.now()

    // const newState = {...this.state.tasks}
    // newState[newTask.task_id]=newTask
    // this.setState(newState)

    this.setState( previousState=>{
      previousState.tasks[newTask.task_id]=newTask
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
            <TaskForm addTask={this.addTask.bind(this)}/>
            {/*OPEN ITEMS*/}
            <article className="col-md-6">
              <h3>Open Items</h3>
              <TaskList tasks={this.state.tasks}/>
            </article>


            {/* COMPLETED ITEMS */}
            <article className="col-md-6">
              <h3>Completed Items</h3>
              <TaskList tasks={this.state.tasks}/>
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

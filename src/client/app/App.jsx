'use strict'

// import the libs we need
import React            from 'react';
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
    // this is right fetr the component is mounted on the screen
    componentDidMount(){
        //go to the database and get the freshest tasks

        //when the data comes back, update the state
    }



    // note that classes do **not** have commas between their methods
    addTask( newTask ){
        //send this change to the db (ajax)
        newTask.task_name = newTask.name
        newTask.task_desc = newTask.desc
        newTask.completed = false;
        newTask.task_id = Date.now();

        //when the data comes back, update the state
        this.state.tasks[newTask.task_id] = newTask;
        this.setState({tasks: this.state.tasks})

    }

    toggleTask( key ){
        this.state.tasks[key].completed = !this.state.tasks[key].completed;
        //send out this new change to the DB (ajax)
        //bring in AJAX data here!
        this.setState({tasks: this.state.tasks})
    }
    // 90% of your components will render()
    // REMEMBER you can only return **one** root element from a render fn.
    render(){
        return(
            <container>
                <header>
                </header>
                <Nav />
                <div className="container">
                    <TaskForm addTask={this.addTask.bind(this)}/>
                    <div className="row">
                        <article className="col-md-6">
                            <h3>Open Items</h3>
                            <TaskList
                            list={this.state.tasks}
                            f={x=>!x}
                            action={this.toggleTask.bind(this)} />
                        </article>

                        <article className="col-md-6">
                            <h3>Closed Items</h3>
                            <TaskList
                            f={x=>x}
                            list={this.state.tasks}
                            action={this.toggleTask.bind(this)} />
                        </article>
                    </div>
                </div>
                <Footer />
            </container>
        )
    }
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))

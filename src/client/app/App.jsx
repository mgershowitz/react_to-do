'use strict'

// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom'
import Nav              from './Nav.jsx'
import Footer           from './Footer.jsx'
import TaskForm         from './TaskForm.jsx'
import TaskList         from './TaskList.jsx'

import ajax             from '../helpers/ajaxAdapter.js'
import util             from '../helpers/util.js'
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
        ajax.getTasks().then( data =>
            this.setState({tasks: data.indexByKey('task_id')})
        //when the data comes back, update the state
    )
    }



    // note that classes do **not** have commas between their methods
    addTask( newTask ){
        ajax.createTask(newTask).then(data=>{
            this.state.tasks[ data[0].task_id ] = data[0]
            this.setState({tasks: this.state.tasks})
        })
        //send this change to the db (ajax)



        //when the data comes back, update the state


    }

    toggleTask( key ){
        let myTask = this.state.tasks[key];

        myTask.completed = !myTask.completed;
        ajax.updateTask(myTask)
            .then(data=>{
                this.state.tasks[data.task_id] = data
                this.setState({tasks: this.state.tasks})
            })
        //send out this new change to the DB (ajax)
        //bring in AJAX data here!
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

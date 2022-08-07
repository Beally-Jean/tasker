import React from 'react';
import '../Task.css';
import TaskInput from './task-input'
import TasksList from './task-list'
import MyLocalStorage from './my-local-storage'

class Tasker extends React.Component {
    constructor (props) {
        super(props)
    
        this.myLocalStorage = new MyLocalStorage()
        this.state = {
          tasks: this.myLocalStorage.get()
        }
    
        this._addNewTask = this._addNewTask.bind(this)
        this._markTaskAsDone = this._markTaskAsDone.bind(this)
      }
    
      render () {
        return (
          <div className='ftasker'>
            <TaskInput
              afterKeyPress={this._addNewTask} 
              afterClick={this._addNewTask} />
    
            <h3>TODO</h3>
            <TasksList
              tasks={this._filterTasksTodo()} 
              markTaskAsDone={this._markTaskAsDone}/>
    
            <h3>DONE</h3>
            <TasksList
              tasks={this._filterTasksDone()} />
          </div>
        );
      }
    
      _filterTasksDone () {
        return this.state.tasks.filter(task => task.isDone === true)
      }
    
      _filterTasksTodo () {
        return this.state.tasks.filter(task => task.isDone === false)
      }
    
      _addNewTask (taskDescription) {
        const tasks = this.state.tasks.slice()
        const task = {
          id: this.state.tasks.length+1, 
          description: taskDescription,
          isDone: false
        }
        tasks.push(task)
    
        this.setState({tasks: tasks})
        this.myLocalStorage.set(task)
      }
    
      _markTaskAsDone (id) {
        const tasks = this.state.tasks.slice()
        const task = tasks.find(task => task.id === id)
        task.isDone = true
    
        this.setState({tasks: tasks})
        this.myLocalStorage.set(id, {
          isDone: true
        })
      }
}

export default Tasker;
import React from 'react';
import TaskItem from './task-item'

export default class TasksList extends React.Component {
  render () {
    return (
      <div>
        {this.props.tasks.map(task => <TaskItem key={task.id} id={task.id} description={task.description} isDone={task.isDone} onTickClick={this.props.markTaskAsDone} />)}
      </div>  
    )
  }
}

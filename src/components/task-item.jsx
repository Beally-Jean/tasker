import React from 'react';


export default class TaskItem extends React.Component {
  render() {
    return this.props.isDone
      ? this._renderDone()
      : this._renderTodo()
  }

  _renderDone () {
    return (
      <div className='task-item'>{this.props.description}</div>
    )
  }

  _renderTodo () {
    return (
        <div className='task-item'>
          <span role="img" aria-label="Mark as done" onClick={this._handleOnClick.bind(this)}>✅</span> 
          {this.props.description}
        </div>
    )
  }

  _handleOnClick () {
    this.props.onTickClick(this.props.id)
  }
}

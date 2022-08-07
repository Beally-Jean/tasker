import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <div className='item' key={this.props.name} onClick={this.props.handleClick}>{this.props.name}</div>
    )
  }
}

export default TodoItem;
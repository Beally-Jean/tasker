import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  renderItem(props) {
    return (
      <TodoItem key={props.name} name={props.name} handleClick={() => props.handleClick(props.name)} />
    )
  }

  render() {
    return (
      <div>
        {this.props.todoItems.map(item => this.renderItem({
          name: item.name,
          handleClick: this.props.handleClick,
        }))}
      </div>
    )
  }
}

export default TodoList;
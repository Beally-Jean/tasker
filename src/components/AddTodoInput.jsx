import React from 'react';

class AddTodoInput extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      todoSave: [],
    };
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" id="add-todo-input" placeholder='Введи таск' className="form-control"
               value={this.state.inputValue}
               onChange={(e) => this.handleInputChange(e)}
               onKeyPress={(e) => this.handleAddTodoFromKeyPress(e)} />
        <span className="input-group-btn">
          <button className="tasks-btn" type="button"
                  onClick={() => this.handleAddTodoFromClick()}>
            Добавить
          </button>
        </span>
      </div>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleAddTodoFromKeyPress(e) {
    if (e.key !== "Enter") { return; }
    this.handleAddTodoFromClick();
  }

  handleAddTodoFromClick() {
    this.props.addTodo(this.state.inputValue);
    this.state.todoSave.push(this.state.inputValue)
    localStorage.setItem('todo', this.state.todoSave)
    this.setState({
      inputValue: "",
    });
  }
}

export default AddTodoInput;
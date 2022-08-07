import React from 'react';

export default class TaskInput extends React.Component {
  constructor (props) {
    super(props)

    this._handleKeyPress = this._handleKeyPress.bind(this)
    this._handleClick = this._handleClick.bind(this)
  }
  render () {
    return (
      <div className='task-input'>
        <input type="text" onKeyPress={this._handleKeyPress} ref={input => this._input = input}/>
        <button onClick={this._handleClick}>Добавить</button>
      </div>
    )
  }

  _handleKeyPress (e) {
    if (e.key.toLowerCase() !== 'enter') return
    
    this.props.afterKeyPress(e.target.value)
    e.target.value = ''
  }

  _handleClick (e) {
    this.props.afterClick(this._input.value)
  }
}

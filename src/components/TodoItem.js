import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
    return (
      <div>
        {/* <p>Hello</p> */}
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}

export default TodoItem
import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  /*
  render() {
    // console.log(this.props.todos);

    return (
      <div>
        <h1>Todos</h1>
      </div>
    );
  }
  */

  /*
  render() {
    return this.props.todos.map((todo) => (
      // <h3>{1 + 1}</h3>
      // <h3>{todo.title}</h3>
      // <TodoItem />
      <TodoItem todo={todo} />
    ));
  }
  */

  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ));
  }
}

export default Todos;

import React, { Component } from "react";
import Todos from "./Todos";

class App extends Component {
  state = {
    todos: [{ id: 1, content: "get up" }, { id: 2, content: "get dressed" }]
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
      // es6 syntax if key and value have the same time
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;

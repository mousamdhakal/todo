import React, { Component } from "react";
import ToDoList from "./TodoList";
import AddTask from "./AddTask";

class Todos extends Component {
  state = {
    tasks: [
      { id: 1, text: "Make bed", complete: true },
      { id: 2, text: "Do assignment", complete: false },
    ],
    count: 3,
  };

  deleteTask = (id) => {
    let tasks = this.state.tasks.filter((task) => {
      return task.id !== id;
    });
    this.setState({ tasks });
  };

  addTask = (task) => {
    task.id = this.state.count;
    let tasks = [...this.state.tasks, task];
    this.setState({
      tasks: tasks,
      count: this.state.count + 1,
    });
  };

  changeTaskStatus = (id) => {
    let tasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });
    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <>
        <AddTask addTask={this.addTask} />
        <ToDoList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          changeTaskStatus={this.changeTaskStatus}
        />
      </>
    );
  }
}

export default Todos;

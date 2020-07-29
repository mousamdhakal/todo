import React from "react";

const ToDoList = (props) => {
  let todoList = props.tasks.length ? (
    props.tasks.map((task) => {
      return (
        <div className="todos__list-item" key={task.id}>
          <span className="todos__text">{task.text}</span>
          <button
            className="todos__button"
            onClick={() => props.deleteTask(task.id)}
          >
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      );
    })
  ) : (
    <div className="todos__list-item">
      <span className="todos__text">All tasks completed.</span>
    </div>
  );
  return <div className="todos__list">{todoList}</div>;
};

export default ToDoList;

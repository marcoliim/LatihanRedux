import "./Todo.css";
import { useState } from "react";
import TodoList from "../todo-list/TodoList";
import TodoCreate from "../todo-create/TodoCreate";

const Todo = () => {
  return (
    <div>
      <h3>Todo List</h3>
      <TodoCreate />
      <TodoList />
    </div>
  );
};

export default Todo;

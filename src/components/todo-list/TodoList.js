import "./TodoList.css";
import Todo from "../todo/Todo";
import { useSelector } from "react-redux";
import todoSlice from "../../redux/todoSlice";

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  return (
    <ul>
      {todos.map(todo => (
        <li>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

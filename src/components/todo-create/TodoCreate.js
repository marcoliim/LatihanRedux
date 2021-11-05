import "./TodoCreate.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";

const TodoCreate = props => {
  const [addForms, setAddForms] = useState(false);
  const [getInputTitle, setInputTitle] = useState("");
  const [getInputDesc, setInputDesc] = useState("");

  const handleAddForms = () => {
    setAddForms(!addForms);
  };

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      addTodo({
        title: getInputTitle,
        description: getInputDesc,
      })
    );
  };

  return (
    <div>
      <button className="add-form" type="button" onClick={handleAddForms}>
        Add Form
      </button>

      {addForms && (
        <form onSubmit={handleSubmit} className="todo-form">
          <input
            placeholder="Title"
            type="text"
            value={getInputTitle}
            onChange={event => setInputTitle(event.target.value)}
          />
          <input
            placeholder="Descriptions"
            type="text"
            value={getInputDesc}
            onChange={event => setInputDesc(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default TodoCreate;

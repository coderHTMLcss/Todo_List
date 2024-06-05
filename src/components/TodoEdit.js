import React, { useState } from "react";
import CheckIcon from "../assets/icons/check.svg";

const TodoEdit = ({ todo, onSubmit }) => {
  const [title, setTitle] = useState(todo.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todo.id, title);
  };

  return (
    <form className="todo-edit">
      <input type="text" value={title} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        <img src={CheckIcon} title="Save" alt="check-icon" />
      </button>
    </form>
  );
};

export default TodoEdit;

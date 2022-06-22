import React, { useState, useEffect } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import AddTodo from "./AddTodo";
import "./Todo.css";

const Todo = ({ todos, completeTodo, removeTodo, updatedTodo }) => {
  const [edit, setEdit] = useState({ id: null, value: "" });
  const submitUpdate = (value) => {
    updatedTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <AddTodo edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div className="show_todos" key={index}>
      <ul key={index}>
        <li key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className="delete-icon"
            />
            <TiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
          </div>
        </li>
      </ul>
    </div>
  ));
};

export default Todo;

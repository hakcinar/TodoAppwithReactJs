import React, { useEffect, useRef, useState } from "react";
import "./AddTodo.css";
const AddTodo = (props) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  const todoHandler = (e) => {
    setInput(e.target.value);
  };
  const todoSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput(" ");
  };
  return (
    <form className="add_form" onSubmit={todoSubmit}>
      <input
        type="text"
        placeholder="Yapılacak bir iş girin"
        onChange={todoHandler}
        value={input}
        ref={inputRef}
      ></input>
      <button type="submit" disabled={!input}>
        Todo Ekle
      </button>
    </form>
  );
};

export default AddTodo;

import React, { useEffect, useState } from "react";
import "./AddTodo.css";
const AddTodo = () => {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);
  const todoHandler = (e) => {
    setTodo({ text: e.target.value, isChecked: false });
    console.log(todo);
  };
  useEffect(() => {
    if (localStorage.getItem("todos")) {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(storedTodos);
    }
  }, []);
  const todoSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      console.log("entere basıldı");
      setTodos([...todos, todo]);
      localStorage.setItem("todos", JSON.stringify([...todos, todo]));
      setTodo("");
      e.target.reset();
    }
  };
  return (
    <div>
      <form className="add_form" onSubmit={todoSubmit}>
        <input
          type="text"
          placeholder="Yapılacak bir iş girin"
          onChange={todoHandler}
          value={todo.text}
        ></input>
        <button type="submit">Todo Ekle</button>
      </form>
      {todos.length > 0 && (
        <div className="show_todos">
          {todos.map((todo, index) => (
            <ul>
              <li key={index}>
                {todo.text}
                <input type="checkbox"></input>
                {todo.isChecked && <span>Tamamlandı</span>}
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddTodo;

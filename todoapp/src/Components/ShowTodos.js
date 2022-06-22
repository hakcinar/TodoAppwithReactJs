import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
const ShowTodos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("todos")) {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(storedTodos);
    }
  }, []);
  const todoImplement = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));

  };
  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };
  const updatedTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <AddTodo onSubmit={todoImplement} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updatedTodo={updatedTodo}
      />
    </div>
  );
};

export default ShowTodos;

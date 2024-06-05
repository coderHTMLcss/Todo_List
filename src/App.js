import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (title) => {
    const newTodo = { id: crypto.randomUUID(), title: title, completed: false };
    const updatedTodo = [...todos, newTodo];
    setTodos(updatedTodo);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const changeTodo = (id, title, completed = false) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title, completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <main className="main">
      <h1>
        React Todo <span>Optimise your day with Todo List!</span>
      </h1>
      <TodoList todos={todos} removeTodo={removeTodo} changeTodo={changeTodo} />
      <TodoCreate createTodo={createTodo} />
    </main>
  );
}

export default App;

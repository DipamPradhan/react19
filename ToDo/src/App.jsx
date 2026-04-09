import { useState } from "react";
import "./App.css";
import { TodoList } from "./TodoList";
function App() {
  return (
    <>
      <h1>To-Do List</h1>
      <TodoList />
    </>
  );
}

export default App;

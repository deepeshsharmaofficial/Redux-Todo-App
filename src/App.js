import { useState } from "react";

// Components
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";

// CSS
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, completed: false}]);
  };

  const toggleTodo = (index)=>{
    const list = [...todos];
    list[index].completed = !list[index].completed;
    setTodos(list);
  }

  return (
    <div className="container">
      <h1 className="text-center fw-bolder mt-5 mb-5 text-primary">To Do App</h1>

      <div className="row justify-content-center mb-5">
        <div className="col-lg-6">
          <TodoForm onCreateTodo={createTodo} />
          <TodoList todos={todos} onToggle={toggleTodo} />
        </div>
      </div>

    </div>
  );
}

export default App;
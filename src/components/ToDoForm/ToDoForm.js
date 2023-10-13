import { useState } from "react";

function ToDoForm({ onCreateTodo }) {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTodo(todoText);
    setTodoText("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <input
            type="text"
            className="form-control" 
            value={todoText} 
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Write a TODO!"
          />

        </div>
        <button type="submit" className="btn btn-primary">Create Todo</button>
      </form>

    </>
  );
}

export default ToDoForm;

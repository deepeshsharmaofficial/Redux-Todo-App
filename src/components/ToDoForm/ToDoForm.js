import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    dispatch(addTodo(todoText));
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

import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/actions/todoActions";

function ToDoList() {
  const todos = useSelector((state) => {
    return state.todos;
  })
  // const todos = store.getState().todos; // this is alternative of useSelector Hook

  const dispatch = useDispatch();

  return (
    <>
      <ol className="list-group list-group-numbered">
        {todos.map((todo, index) => (          
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-start">

            <div class="ms-2 me-auto">
              <div>
                <span>{todo.text}</span>
              </div>
              <span className={todo.completed ? 'badge bg-success rounded-pill':'badge bg-danger rounded-pill'}>{todo.completed ? 'Completed': 'Pending'}</span>

            </div>

            <button className="btn btn-warning" onClick={()=>{dispatch(toggleTodo(index))}} >Toggle</button>
            
          </li>


        ))}
      </ol>
    </>
  );
}

export default ToDoList;

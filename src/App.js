import { Provider } from "react-redux";
import {store} from "./redux/store";

// Components
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";

// CSS
import './App.css';

function App() {

  return (
    <div className="container">
      <h1 className="text-center fw-bolder mt-5 mb-5 text-primary">To Do App</h1>

      <div className="row justify-content-center mb-5">
        <div className="col-lg-6">
          <Provider store={store}>
            <TodoForm />
            <TodoList />
          </Provider>
        </div>
      </div>

    </div>
  );
}

export default App;
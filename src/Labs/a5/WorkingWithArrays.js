import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("Go to work");
  const [description, setDescription] = useState("New description");
  const [due, setDue] = useState("2021-09-09");
  const [completed, setCompleted] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  }); // {id: 1, title: "Go to work"
  <input
    className="form-control"
    value={id}
    onChange={(e) => setTodo({ ...todo, id: e.target.value })}
  />;

  const TODOS_API = "https://kanbas-node-server-app-fdd0.onrender.com/a5/todos";

  const fetchTodosPromise = () => {
    const promise = axios.get(TODOS_API);
    promise.then((response) => {
      setTodos(response.data);
    });
  };

  const createTodo = async () => {
    const response = await axios.get("https://kanbas-node-server-app-fdd0.onrender.com/a5/todos/create");
    setTodos(response.data);
  };

  const postTodo = async () => {
    const response = await axios.post("https://kanbas-node-server-app-fdd0.onrender.com/a5/todos", {
      title: title,
      description: description,
      due: due,
      completed: completed
    });
    setTodos(response.data);
  };

  const fetchTodos = async () => {
    const response = await axios.get("https://kanbas-node-server-app-fdd0.onrender.com/a5/todos");
    setTodos(response.data);
  };  

  const fetchTodoById = async (id) => {
    try{
      const response = await axios.get(`${TODOS_API}/${id}`);
      setTodo(response.data);
    }
    catch (error) {
      console.log(error);
      setErrorMessage("Unable to fetch Todo");
    }
  };

  const removeTodo = async (id) => {
    const response = await axios.get(`${TODOS_API}/${id}/delete`);
    setTodos(response.data);
  };

  const deleteTodo = async (id) => {
    try{
      const response = await axios.delete(`${TODOS_API}/${id}`);
      setTodos(response.data);
    }
    catch (error) {
      console.log(error);
      setErrorMessage("Unable to delete Todo");
    }
  };

  const updateTitle = async (id, title) => {
    const response = await axios.get(`${TODOS_API}/${id}/title/${title}`);
    setTodos(response.data);
  };

  const updateTodo = async () => {
    try{
      const response = await axios.put(
        `${TODOS_API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (
        t.id === todo.id ? todo : t)));
      setTodo({});
    }
    catch (error) {
      console.log(error);
      setErrorMessage("Unable to update Todo");
    }

  };

  useEffect(() => {
    // fetchTodosPromise();
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Working with Arrays</h1>
      <h2>Todos from server</h2>

      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
      />
      <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}
        className="form-control mb-2"
        type="text"
      />
      
      <button onClick={createTodo}
              className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>

      <button onClick={() => updateTitle(todo.id, todo.title)}
              className="btn btn-success mb-2 w-100">
        Update Title
      </button>
      

      <input
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-100"
        onChange={(e) => setDescription(e.target.value)}
        value={description} type="text"
      />
      <input
        className="date w-100"
        onChange={(e) => setDue(e.target.value)}
        value={due} type="date"
      />
      <br/>
      <label>
        <input
          className="checkbox"
          onChange={(e) => setCompleted(e.target.checked)}
          value={completed} type="checkbox"
        />
        Completed
      </label>
      <br/>
      <button className="btn btn-warning w-100 mt-1 mb-2" 
        onClick={postTodo}>
        Post Todo
      </button>

      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
      />
      <input
        className="form-control"
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}
      />
      <textarea
        className="w-100"
        onChange={(e) =>setTodo({
          ...todo, description: e.target.value })}
        value={todo.description} type="text"
      />
      <input
        className="date w-100"
        onChange={(e) => setTodo({
          ...todo, due: e.target.value })}
        value={todo.due} type="date"
      />
      <br/>
      <label>
        <input
          className="checkbox"
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })}
          value={todo.completed} type="checkbox"
        />
        Completed
      </label>
      <br/>
      <button className="btn btn-primary w-100 mt-1 mb-2"
        onClick={updateTodo}>
        Update Todo
      </button>
      
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}

      <br/>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning me-2 float-end" >
              Edit
            </button>
            <button
              className="btn btn-danger float-end"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
            <input
              className="checkbox me-1"
              checked={todo.completed}
              type="checkbox" readOnly
            />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            <hr />
            {todo.id}
          </li>
        ))}
      </ul>

      
      <br/>
      <h2>Working with Arrays</h2>

      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
      />
      <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}
        className="form-control mb-2"
        type="text"
      />
      <h3>Updating an Item in an Array</h3>
      <a
        href={`${TODOS_API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2" >
        Update Title to {todo.title}
      </a>

      <br/><br/>
      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
      />
      <input
        value={todo.completed}
        onChange={(e) => setTodo({
          ...todo, completed: e.target.value })}
        className="form-control mb-2"
        type="text"
      />
      <a
        href={`${TODOS_API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary me-2" >
        Update Completed to {todo.completed}
      </a>

      <br/><br/>
      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
      />
      <input
        value={todo.description}
        onChange={(e) => setTodo({
          ...todo, description: e.target.value })}
        className="form-control mb-2"
        type="text"
      />
      <a
        href={`${TODOS_API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary me-2" >
        Update Description to {todo.description}
      </a>


      <br/><br/>
      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
      />
      <h3>Deleting from an Array</h3>
      <a href={`${TODOS_API}/${todo.id}/delete`}
         className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>

      <br/><br/>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />

      <input
        className="form-control"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <a
        href={`https://kanbas-node-server-app-fdd0.onrender.com/a5/todos/${id}`}
        className="btn btn-primary"
      >
        Get Todo {id}
      </a>
      <h4>Retrieving Arrays</h4>
      <a href={TODOS_API} className="btn btn-primary">
        Get Todos
      </a>

      <h3>Filtering Array Items</h3>
      <a href={`${TODOS_API}?completed=true`}
        className="btn btn-primary me-2" >
        Get Completed Todos
      </a>

    </div>
  );
}

export default WorkingWithArrays;

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./css/home.css";
import { useState } from "react";
import {
  useGetTodosQuery,
  useEditTodoMutation,
  useDeleteTodoMutation,
} from "./api/apiSlice.js";

const Home = () => {
  const { data: todos, isLoading } = useGetTodosQuery();

  const [editTodo] = useEditTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("Deleting todo with id:", id);
    deleteTodo({ id });
    navigate("/");
  };

  // //fix later check on video
  const handleComplete = (_id, completed, name, description) => {
    editTodo({ id: _id, completed: !completed, name, description });
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Task App</h2>
      <Link to="/create" className="btn btn-success my-3">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {console.log("Todos data:", todos)}
          {isLoading ? (
            <tr>
              <td>Loading...</td>
            </tr>
          ) : (
            todos?.map((todo, index) => (
              <tr key={index}>
                <td className={`${todo.completed ? "line-out" : ""}`}>
                  {todo._id.slice(-4)}
                </td>
                <td className={`${todo.completed ? "line-out" : ""}`}>
                  {todo.name}
                </td>
                <td className={`${todo.completed ? "line-out" : ""}`}>
                  {todo.description}
                </td>
                <td>
                  <Link to={`/edit/${todo._id}`}>Edit</Link>
                  <button onClick={() => handleDelete(todo._id)}>Delete</button>
                  <button
                    onClick={() =>
                      handleComplete(
                        todo._id,
                        todo.completed,
                        todo.name,
                        todo.description
                      )
                    }
                  >
                    {todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

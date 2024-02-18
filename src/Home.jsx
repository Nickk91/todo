import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "./TaskReducer";
import "./css/home.css";
const Home = () => {
  const [completed, setCompleted] = useState(false);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask({ id: id }));
  };

  const handleComplete = (event) => {
    dispatch(
      completeTask({
        id: id,
        description: udescription,
      })
    );
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
          {tasks.map((task, index) => (
            <tr key={index}>
              <td className={`${task.completed}`}>{task.id}</td>
              <td className={`${task.completed}`}>{task.name}</td>
              <td className={`${task.completed}`}>{task.description}</td>
              <td>
                <Link to={`/edit/${task.id}`}>Edit</Link>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
                <button onClick={() => handleComplete(task.id)}>
                  Mark as Complete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { completeTask, deleteTask } from "./TaskReducer";
import "./css/home.css";
const Home = () => {
  const [completed, setCompleted] = useState(false);
  const tasks = useSelector((state) => state.tasks);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask({ id: id }));
  };

  const handleComplete = (id) => {
    dispatch(
      completeTask({
        id: id,
      })
    );
    console.log("complete");
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
              <td className={`${task.completed? "line-out": ""}`}>{task.id}</td>
              <td className={`${task.completed? "line-out": ""}`}>{task.name}</td>
              <td className={`${task.completed? "line-out": ""}`}>{task.description}</td>
              <td>
                <Link to={`/edit/${task.id}`}>Edit</Link>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
                {task.completed?(<button onClick={() => handleComplete(task.id)}>
                  Mark as Incomplete
                </button>):((<button onClick={() => handleComplete(task.id)}>
                  Mark as Complete
                </button>))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

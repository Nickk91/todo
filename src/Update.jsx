import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTask } from "./TaskReducer";

const Update = () => {
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks);
  const existingTask = tasks.filter((f) => f.id == id);
  const { name, description } = existingTask;
  const [uname, setName] = useState(name);
  const [udescription, setDescription] = useState(description);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateTask({
        id: id,
        name: uname,
        description: udescription,
      })
    );
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update Task</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name"
              value={uname}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="text">Description:</label>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="enter description"
              value={udescription}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;

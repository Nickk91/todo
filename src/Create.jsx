import React, { useState } from "react";
// import { addTask } from "./TaskReducer.jsx";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCreateTodoMutation } from "./api/apiSlice.js";

const Create = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [createTodo] = useCreateTodoMutation();

  // const tasks = useSelector((state) => state.tasks);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo({ name: name, description: description });
    setName("");
    setDescription("");
    navigate("/");
  };
  return (
    <div>
      <div>
        <h3>Add New Task</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="enter task description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;

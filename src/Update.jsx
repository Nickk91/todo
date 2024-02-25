import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { updateTask } from "./TaskReducer";
import { useEditTodoMutation, useGetTodosQuery } from "./api/apiSlice.js";

const Update = () => {
  const { id } = useParams();
  // const tasks = useSelector((state) => state.tasks);
  // const existingTask = tasks.filter((f) => f.id == id);
  const [currentTodo, setCurrentTodo] = useState(null);

  const { data: todos, isLoading } = useGetTodosQuery();
  const [uname, setUname] = useState("");
  const [udescription, setUdescription] = useState("");
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editTodo] = useEditTodoMutation();

  useEffect(() => {
    const todo = todos?.find((t) => t._id === id);

    setCurrentTodo(todo);
    console.log(todo);
    setUname(todo.name);
    setUdescription(todo.description);
  }, [isLoading]);

  const handleUpdate = (event) => {
    event.preventDefault();
    editTodo({
      id,
      completed: currentTodo.completed,
      name: uname,
      description: udescription,
    });
    setUname("");
    setUdescription("");
    // dispatch(
    //   updateTask({
    //     id: id,
    //     name: uname,
    //     description: udescription,
    //   })
    // );
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
              onChange={(e) => setUname(e.target.value)}
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
              onChange={(e) => setUdescription(e.target.value)}
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

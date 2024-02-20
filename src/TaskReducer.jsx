import { createSlice } from "@reduxjs/toolkit";
import { taskList } from "./Data";

const taskSlice = createSlice({
  name: "tasks",
  initialState: taskList,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, name, description } = action.payload;
      const ut = state.find((task) => task.id == id);
      if (ut) {
        ut.name = name;
        ut.description = description;
      }
    },

    completeTask: (state, action) => {
      const { id } = action.payload;
      const ut = state.find((task) => task.id == id);
      if (ut) {
        ut.completed = !ut.completed;
      }
    },

    deleteTask: (state, action) => {
      const { id } = action.payload;
      const ut = state.find((task) => task.id == id);
      if (ut) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addTask, updateTask, deleteTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;

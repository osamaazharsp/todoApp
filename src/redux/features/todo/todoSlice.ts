import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/configureStore";
import { ITodo } from "../../../interface";

type TodosState = ITodo[];

const initialState: TodosState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.unshift(action.payload);
    },
    changeStatus: (state, action) => {
      const removedElement = state.splice(action.payload, 1)[0];
      removedElement.status = "done";
      const insertIndex = state.findIndex((todo) => {
        return todo.status === "done";
      });
      if (insertIndex > -1) {
        state.splice(insertIndex, 0, removedElement);
      } else {
        state.push(removedElement);
      }
    },
  },
});

export const { addTodo, changeStatus } = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todos;
export default todoSlice.reducer;

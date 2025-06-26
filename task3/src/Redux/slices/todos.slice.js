import { createSlice } from "@reduxjs/toolkit";
export const FILTRATION_TYPES = {
  ALL: "all",
  COMPLETED: "completed",
  IN_PROGRESS: "in-progress",
};
const initialState = {
  todos: [],
  filter: FILTRATION_TYPES.ALL,
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    updateFilter: (state, action) => {
      const filter = action.payload;
      state.filter = filter;
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  setFilter,
  updateFilter,
  setTodos,
} = todosSlice.actions;

export default todosSlice.reducer;

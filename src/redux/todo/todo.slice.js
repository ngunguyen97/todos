import { createSlice } from '@reduxjs/toolkit';
import { transformTodos } from './todo.utils';

const initialState = {
  items: [
    { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
    { id: 3, name: 'Learn Javascript', completed: false, priority: 'Low' },
  ],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggleCompletedItem: (state, action) => {
      state.items = transformTodos(state, action);
    },
  },
});

export const { addTodo, toggleCompletedItem } = todoSlice.actions;
export default todoSlice.reducer;

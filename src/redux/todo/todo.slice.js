import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { transformTodos } from './todo.utils';

const initialState = {
  loading: 'idle',
  items: [],
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.loading = 'pending';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = 'idle';
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(toggleTodoItem.fulfilled, (state, action) => {
        state.items = transformTodos(state, action);
      });
  },
});

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('/api/todos');
  const { todos } = await response.json();

  return todos;
});

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (newTodo) => {
  const response = await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify(newTodo),
  });
  const { todo } = await response.json();

  return todo;
});

export const toggleTodoItem = createAsyncThunk(
  'todos/toggleTodoItem',
  async ({ id, completed }) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ completed }),
    });
    const { todo } = await response.json();

    return todo;
  }
);

export const { addTodo, toggleCompletedItem } = todoSlice.actions;
export default todoSlice.reducer;

export const addTodoItem = (todo) => {
  return (dispatch, getState) => {
    console.log('[addTodoThunk]', getState());
    dispatch(addTodo(todo));
  };
};

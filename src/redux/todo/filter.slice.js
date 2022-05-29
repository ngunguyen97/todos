import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  status: 'All',
  priorities: [],
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    searchTodo: (state, action) => {
      state.search = action.payload;
    },
    filterStatus: (state, action) => {
      state.status = action.payload;
    },
    filterPriority: (state, action) => {
      state.priorities = action.payload;
    },
  },
});

export const { searchTodo, filterStatus, filterPriority } = filterSlice.actions;
export default filterSlice.reducer;

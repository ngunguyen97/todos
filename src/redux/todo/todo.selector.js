import { createSelector } from 'reselect';

export const selectTodos = (state) => state.todos.items;
export const selectSearch = (state) => state.todos.filters.search;

export const selectFilteredTodos = createSelector(
  selectTodos,
  selectSearch,
  (todos, searchValue) => {
    return todos.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
);

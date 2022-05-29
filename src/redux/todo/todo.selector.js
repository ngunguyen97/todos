import { createSelector } from 'reselect';

export const selectTodos = (state) => state.todos.items;
export const selectSearch = (state) => state.filters.search;
export const selectStatus = (state) => state.filters.status;
export const selectPriorities = (state) => state.filters.priorities;

export const selectFilteredTodos = createSelector(
  selectTodos,
  selectStatus,
  selectSearch,
  (todos, status, searchValue) => {
    return todos.filter((item) => {
      switch (status) {
        case 'Completed':
          return item.completed && item.name.toLowerCase().includes(searchValue.toLowerCase());
        case 'Todo':
          return !item.completed && item.name.toLowerCase().includes(searchValue.toLowerCase());
        default:
          return item.name.toLowerCase().includes(searchValue.toLowerCase());
      }
    });
  }
);

export const selectTodoListByAllFilters = createSelector(
  selectFilteredTodos,
  selectPriorities,
  (filterdTodos, priorties) => {
    if (priorties.length > 0) {
      return filterdTodos.filter((item) => {
        if (priorties.includes(item.priority)) return item;
        return false;
      });
    }
    return filterdTodos;
  }
);

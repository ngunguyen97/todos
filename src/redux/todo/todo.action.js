export const addTodo = (todoItem) => ({
  type: 'todos/addTodo',
  payload: todoItem,
});

export const searchTodo = (searchValue) => ({
  type: 'filters/searchTodo',
  payload: searchValue,
});

export const filterStatus = (status) => ({
  type: 'filters/status',
  payload: status,
});

export const filterPriority = (priorities) => ({
  type: 'filters/priorities',
  payload: priorities,
});

export const toggleCompletedItem = (item) => ({
  type: 'todos/completedItem',
  payload: item,
});

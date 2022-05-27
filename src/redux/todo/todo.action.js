export const addTodo = (todoItem) => ({
  type: 'todos/addTodo',
  payload: todoItem,
});

export const searchTodo = (searchValue) => ({
  type: 'filters/searchTodo',
  payload: searchValue,
});

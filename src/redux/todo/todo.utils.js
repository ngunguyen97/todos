export const transformTodos = (state, action) => {
  return state.items.map((item) => {
    if (item.id === action.payload) {
      return {
        ...item,
        completed: !item.completed,
      };
    }
    return item;
  });
};

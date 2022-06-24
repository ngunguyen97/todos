export const transformTodos = (state, action) => {
  const results = state.items.map((item) => {
    if (item.id === action.payload.id) {
      return (item = action.payload);
    }
    return item;
  });
  return results;
};

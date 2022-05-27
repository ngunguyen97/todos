const initState = {
  filters: {
    search: '',
    status: 'All',
    priority: [],
  },
  items: [
    { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
    { id: 3, name: 'Learn Javascript', completed: false, priority: 'Low' },
  ],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todos/addTodo':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'filters/searchTodo':
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };
    default:
      return state;
  }
};

export default todoReducer;

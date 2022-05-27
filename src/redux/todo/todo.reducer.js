const initState = {
  filters: {
    search: '',
    status: 'All',
    priority: [],
  },
  todos: [
    { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
    { id: 3, name: 'Learn Javscript', completed: false, priority: 'Low' },
  ],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todos/addTodo':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default todoReducer;

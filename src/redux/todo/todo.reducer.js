import { transformTodos } from './todo.utils';

const initState = {
  filters: {
    search: '',
    status: 'All',
    priorities: [],
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
    case 'filters/status':
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };
    case 'filters/priorities':
      return {
        ...state,
        filters: {
          ...state.filters,
          priorities: action.payload,
        },
      };
    case 'todos/completedItem':
      return {
        ...state,
        items: transformTodos(state, action),
      };
    default:
      return state;
  }
};

export default todoReducer;

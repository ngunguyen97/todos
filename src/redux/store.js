/**
 * Redux-toolkit
 */
import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todo/todo.slice';
import filterSlice from './todo/filter.slice';

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    filters: filterSlice,
  },
});

/*
** Redux-core 
import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import rootReducer from './rootReducer';

const composeEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composeEnhancers);

export default store;
*/

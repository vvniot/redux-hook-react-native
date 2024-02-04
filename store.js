// store.js
import { createStore } from 'redux';

// Reducer
const counterReducer = (state = { count: 5 }, action) => {
  switch (action.type) {
    case 'INCREMENTZ':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 2 };
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

export default store;

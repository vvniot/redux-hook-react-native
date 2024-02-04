// App.js
import React from 'react';
import { Provider } from 'react-redux';
import CounterComponent from './CounterComponent';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import TaskManager from './TaskManager';

const App = () => {
  return (
    <Provider store={store}>
      <TaskManager />
    </Provider>
  );
};

export default App;
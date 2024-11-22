import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import NewTask from './components/NewTask';

const TaskManager = () => {
  const view = useSelector(state => state.tasks.view);

  const renderView = () => {
    switch (view) {
      case 'list':
        return <TaskList />;
      case 'details':
        return <TaskDetails />;
      case 'new':
        return <NewTask />;
      default:
        return null;
    }
  };

  return renderView();
};

export default TaskManager;
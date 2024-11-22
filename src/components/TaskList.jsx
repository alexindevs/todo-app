import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusIcon } from 'lucide-react';
import { toggleTask, setView, setSelectedTask } from '../store/taskSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);

  return (
    <div className="min-h-screen bg-gray-50 p-6 w-[100vw]">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-semibold text-gray-800">All tasks</h1>
          <button
            onClick={() => dispatch(setView('new'))}
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-[#111618] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
          >
            <PlusIcon size={20} />
          </button>
        </div>

        <div className="space-y-4">
          {tasks.map(task => (
            <div
              key={task.id}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={(e) => {
                  e.stopPropagation();
                  dispatch(toggleTask(task.id));
                }}
                className="h-5 w-5"
              />
              <span 
                onClick={() => dispatch(setSelectedTask(task.id))}
                className={`text-gray-700 ${task.completed ? 'line-through' : ''}`}
              >
                {task.title}
              </span>
            </div>
          ))}
        </div>

        <div className="fixed bottom-8 right-8">
          <button 
            onClick={() => dispatch(setView('new'))}
            className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center text-white shadow-lg"
          >
            <span>
              <PlusIcon size={24} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
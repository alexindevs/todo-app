import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronLeftIcon } from 'lucide-react';
import { deleteTask, setView } from '../store/taskSlice';

const TaskDetails = () => {
  const dispatch = useDispatch();
  const selectedTaskId = useSelector(state => state.tasks.selectedTaskId);
  const task = useSelector(state => 
    state.tasks.tasks.find(t => t.id === selectedTaskId)
  );

  if (!task) return null;

  return (
    <div className="min-h-screen bg-gray-50 p-6 w-[100vw]">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-sm p-6">
        <div className="flex items-center mb-8">
          <button onClick={() => dispatch(setView('list'))} className="text-gray-600">
            <ChevronLeftIcon size={24} />
          </button>
          <h2 className="ml-4 text-xl font-semibold">Task Details</h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-xl">
            <h3 className="font-medium text-gray-800 mb-2">{task.title}</h3>
            <p className="text-gray-600">{task.notes || 'No description added'}</p>
          </div>

          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="w-full p-4 text-red-500 font-medium"
          >
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { XIcon } from 'lucide-react';
import { addTask, setView } from '../store/taskSlice';

const NewTask = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-black w-[100vw]">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-8">
          <button onClick={() => dispatch(setView('list'))}>
            <XIcon size={24} className="text-gray-600" />
          </button>
          <h2 className="text-xl font-semibold">New Task</h2>
          <div className="w-6"></div>
        </div>

        <div className="space-y-6">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-0"
          />

          <textarea
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-0 min-h-[100px]"
          />

          <button
            onClick={() => {
              if (title.trim()) {
                dispatch(addTask({ title, notes }));
              }
            }}
            className="w-full p-4 bg-blue-400 text-white rounded-xl font-medium"
          >
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
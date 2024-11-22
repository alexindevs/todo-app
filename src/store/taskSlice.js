import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, title: 'Buy a new speaker', completed: false, notes: 'Preferably Oraimo brand' },
    { id: 2, title: 'Laundry', completed: false, notes: 'Wash clothes for outing on Saturday first' },
    { id: 3, title: 'Call mom', completed: false, notes: "Is she doing okay? How's work treating her?" },
    { id: 4, title: 'Fill report cards', completed: false, notes: 'Deadline by the 25th' },
  ],
  view: 'list',
  selectedTaskId: null,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        notes: action.payload.notes,
        completed: false,
      };
      state.tasks.push(newTask);
      state.view = 'list';
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
      state.view = 'list';
      state.selectedTaskId = null;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
    setSelectedTask: (state, action) => {
      state.selectedTaskId = action.payload;
      state.view = 'details';
    },
  },
});

export const { addTask, toggleTask, deleteTask, setView, setSelectedTask } = taskSlice.actions;
export default taskSlice.reducer;
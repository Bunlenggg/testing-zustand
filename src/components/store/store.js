import { create } from "zustand";

export const MyStore = create((set) => ({
  count: 3,
  setCount: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  // new state
  tasks: [{ id: 1, title: "My List", isDone: false }],
  setTasks: (value) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: Math.random(), title: value, isDone: false },
      ],
    })),
}));

import { create } from "zustand";

export const MyStore = create((set) => ({
  count: 3,
  setCount: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  // new state
  tasks: [],
  setTasks: (value) => set((state) => ({
    tasks: [...state.tasks, {id: Math.random(), title:value, isDone : false}]
  })),

  // delete
  setDelete: (id) =>set((state) =>({
    tasks: state.tasks.filter(each => each.id !== id) 
  })) 
}));

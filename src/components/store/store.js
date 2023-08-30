import { create } from "zustand";

export const MyStore = create((set) => ({
  count: 3,
  setCount: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  // new state
  tasks: [],
  setTasks: (value) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: Math.random(), title: value, isDone: false },
      ],
    })),

  // delete
  setDelete: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((each) => each.id !== id),
    })),
  editID: null,
  setEditID: (id) =>
    set(() => ({
      editID: id,
    })),
  editTitle: null,
  setEditTitle: (title) =>
    set(() => ({
      editTitle: title,
    })),
  setUpdate: (oldID, newTitle) =>
    set((state) => ({
      tasks: state.tasks.map((each) =>
        each.id === oldID ? { ...each, title: newTitle } : each
      ),
    })),

  //new State
  isOpen: false,
  setOpen: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
}));

import { create } from "zustand";

const countStore = (set) => ({
  count: 0,
  increment: () => {
    set((state) => ({
      ...state,
      count: state.count + 1,
    }));
  },
  decrement: () => {
    set((state) => ({
      ...state,
      count: state.count - 1,
    }));
  },
  reset: () => {
    set((state) => ({
      ...state,
      count: 0,
    }));
  },
});

export const useCountStore = create(countStore);

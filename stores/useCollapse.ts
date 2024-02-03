import { create } from "zustand";

type UseCollapseType = {
  isOpen: boolean;
  toggle: () => void;
};

export const useCollapse = create<UseCollapseType>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

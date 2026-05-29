import { StateCreator } from "zustand";
import { AuthSlice } from "./auth-slice";

export interface UiSlice {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const createUiSlice: StateCreator<UiSlice & AuthSlice, [], [], UiSlice> = (set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
});

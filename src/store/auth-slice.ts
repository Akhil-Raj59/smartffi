import { StateCreator } from "zustand";
import apiClient from "@/services/interceptors";
import { UiSlice } from "./ui-slice";

export interface AuthSlice {
  user: any | null;
  setUser: (user: any) => void;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const createAuthSlice: StateCreator<UiSlice & AuthSlice, [], [], AuthSlice> = (set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: async () => {
    try {
      await apiClient.get("/logout");
    } catch (error) {
      console.error("Backend logout failed:", error);
    }
    localStorage.removeItem("auth_token");
    set({ user: null });
  },
  checkAuth: async () => {
    try {
      const response: any = await apiClient.get("/me");
      if (response && response.success && response.user) {
        set({ user: response.user });
      } else {
        set({ user: null });
      }
    } catch (error) {
      set({ user: null });
    }
  },
});

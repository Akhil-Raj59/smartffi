import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createAuthSlice, AuthSlice } from "./auth-slice";
import { createUiSlice, UiSlice } from "./ui-slice";

type StoreState = AuthSlice & UiSlice;

export const useAppStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createUiSlice(...a),
    }),
    {
      name: "app-storage",
      partialize: (state) => ({ user: state.user }),
    }
  )
);

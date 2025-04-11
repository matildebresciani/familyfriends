import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      messages: 1,
      increaseMessages: () => set({ messages: get().messages + 1 }),
    }),
    {
      name: "message-storage",
    }
  )
);
export default useStore;

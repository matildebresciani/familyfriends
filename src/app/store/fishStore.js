import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addProduct: (product) => set({ cart: get().cart.concat(product) + 1 }),
    }),
    {
      name: "cart",
    }
  )
);
export default useCartStore;

//concat er at sammensætte to arrays eller at putte noget ind i et array som allerede eksisterer

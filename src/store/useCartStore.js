import { create } from "zustand";

const cartStore = (set) => ({
  cart: [],
  addToCart: (product) => {
    set((state) => ({
      ...state,
      cart: [...state.cart, product],
    }));
  },
  removeFromCart: (productId) => {
    set((state) => ({
      ...state,
      cart: state.cart.filter((product) => product.id !== productId),
    }));
  },
  clearCart: () => {
    set((state) => ({
      ...state,
      cart: [],
    }));
  },
});

export const useCartStore = create(cartStore);

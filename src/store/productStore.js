import { create } from "zustand";

const fetchProducts = async (set) => {
  set((state) => ({
    ...state,
    loading: true,
  }));
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    set((state) => ({
      ...state,
      loading: false,
      products: data.products,
      error: "",
    }));
  } catch (err) {
    set((state) => ({
      ...state,
      loading: false,
      products: [],
      error: err.message,
    }));
  }
};

const productStore = (set) => ({
  loading: false,
  error: "",
  products: [],
  fetchProducts: () => fetchProducts(set),
});

export const useProductStore = create(productStore);

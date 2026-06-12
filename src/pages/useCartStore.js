import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],

      toggleFavorite: (item) => set((state) => {
        const isAlreadyInCart = state.cartItems.some(cartItem => cartItem.location === item.location);

        if (isAlreadyInCart) {
          return { cartItems: state.cartItems.filter(cartItem => cartItem.location !== item.location) };
        } else {
          return { cartItems: [...state.cartItems, item] };
        }
      }),
    }),
    {
      name: 'amaranoc-cart-storage',
    }
  )
);

export default useCartStore;
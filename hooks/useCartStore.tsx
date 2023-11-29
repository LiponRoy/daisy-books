import { IBook } from "@/types/ndex";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ICartStore {
    cartProducts: IBook[];
    totalQuantity: number;
    totalPrice: number;
    addItemToCart: (newItem: IBook) => void;
    removeItemFromCart: (newItem: IBook) => void;
}

const useCartStore = create<ICartStore>()(
    devtools(persist(
        (set) => ({
            cartProducts: [],
            totalQuantity: 0,
            totalPrice: 0,
            addItemToCart: (newItem) => {
                
                let newCart: IBook[];
                set((state) => {
                    let itemFound = state.cartProducts.findIndex((item) => item.id === newItem.id);

                    if (itemFound >= 0) {
                        state.cartProducts[itemFound].cartQuantity += 1;

                    } else {
                        newCart = [...state.cartProducts, newItem]
                    }
                    return {
                        ...state,
                        cartProducts: newCart
                    }
                })
            },
            removeItemFromCart: (removeItem) => {
                const { id } = removeItem;

                set((state) => {
                    const newItem = state.cartProducts.filter((item) => item.id !== id);
                    return {
                        ...state,
                        cartProducts: newItem
                    }
                })
            },

        }),
        { name: "CartStore" }
    ), { name: 'CartStore', getStorage: () => localStorage })
);

export default useCartStore;

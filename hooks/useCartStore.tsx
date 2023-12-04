import { IBook } from "@/types/ndex";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ICartStore {
    cartProducts: IBook[];
    totalQuantity: number;
    totalPrice: number;
    addItemToCart: (newItem: IBook) => void;
    incrementCart: (newItem: IBook) => void;
    decrementCart: (newItem: IBook) => void;
    removeItemFromCart: (newItem: IBook) => void;
}

const useCartStore = create<ICartStore>()(
    devtools(persist(
        (set) => ({
            cartProducts: [],
            totalQuantity: 0,
            totalPrice: 0,
            addItemToCart: (newItem) => {
                set((state) => {
                    const itemIndex = state.cartProducts.findIndex(
                        (item) => item.id === newItem.id
                    );

                    if (itemIndex >= 0) {
                        const updatedCart = [...state.cartProducts];
                        const updatedItem = { ...updatedCart[itemIndex] };
                        updatedItem.cartQuantity += 1;
                        updatedCart[itemIndex] = updatedItem;

                        return {
                            ...state,
                            cartProducts: updatedCart,
                        };
                    } else {
                        return {
                            ...state,
                            cartProducts: [
                                ...state.cartProducts,
                                { ...newItem, cartQuantity: 1 },
                            ],
                        };
                    }
                });
            },
            incrementCart: (newItem) => {
                set((state) => {
                    const itemIndex = state.cartProducts.findIndex(
                        (item) => item.id === newItem.id
                    );

                    const updatedCart = [...state.cartProducts];
                    const updatedItem = { ...updatedCart[itemIndex] };
                    if (updatedItem.cartQuantity >= 1) {
                        updatedItem.cartQuantity += 1;
                    }
                    updatedCart[itemIndex] = updatedItem;

                    return {
                        ...state,
                        cartProducts: updatedCart,
                    };

                });
            },
            decrementCart: (newItem) => {
                set((state) => {
                    const itemIndex = state.cartProducts.findIndex(
                        (item) => item.id === newItem.id
                    );

                    const updatedCart = [...state.cartProducts];
                    const updatedItem = { ...updatedCart[itemIndex] };

                    if (updatedItem.cartQuantity > 1) {
                        updatedItem.cartQuantity -= 1;
                    }
                    updatedCart[itemIndex] = updatedItem;

                    return {
                        ...state,
                        cartProducts: updatedCart,
                    };

                });
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
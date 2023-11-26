import { IBook } from "@/types/ndex";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ISearchStore {
    cartProducts: IBook[];
	totalQuantity: number;
	totalPrice: number;
addItemToCart:(newItem: IBook[])=>void;
}

const useCartStore = create<ISearchStore>()(
  devtools(persist(
    (set) => ({
        cartProducts: [],
        totalQuantity: 0,
        totalPrice: 0,
        addItemToCart: (newItem) => {
            const { id} = newItem;
            let newCart:any[]=[];
            set((state) => {
                const itemFound =state.cartProducts.findIndex((item)=>item.id===id);

                if(itemFound>=0){
                    state.cartProducts[itemFound].cartQuantity+=1;

                }else{
                    newCart= [...state.cartProducts, newItem]
                }
                return {
                    ...state,
                    cartProducts: newCart
                }
            })
        },
       
    }),
    { name: "CartStore" }
  ),{ name: 'CartStore',getStorage: () => localStorage })
);

export default useCartStore;

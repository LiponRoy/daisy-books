import { IBook } from "@/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ISearchStore {
  filteredBook: IBook[];
  FILTER_BY_SEARCH: (dataAll: IBook[], searchItem: string) => void;
  FILTER_BY_CATEGORY: (allData: IBook[], cat: string) => void;
  CALCULATE_MAX_MIN_PRICE: (allData: IBook[]) => void;
  FILTER_BY_PRICE: (allData: IBook[], price: number) => void;
  SORT_PRODUCT: (allData: IBook[], sort: string) => void;

  MIN_PRICE: number;
  MAX_PRICE: number;
}

const useSearchFilter = create<ISearchStore>()(
  devtools(
    (set) => ({
      filteredBook: [],
      MIN_PRICE: 0,
      MAX_PRICE: 0,

      FILTER_BY_SEARCH: (dataAll, searchItem) => {
        const tempProducts = dataAll?.filter(
          (item) =>
            item.title.toLowerCase().includes(searchItem.toLowerCase()) ||
            item.author.toLowerCase().includes(searchItem.toLowerCase())
        );

        set({ filteredBook: tempProducts });
      },

      FILTER_BY_CATEGORY: (allData, cat) => {
        let tempProduct = [];

        if (cat === "All") {
          tempProduct = allData;
        } else {
          tempProduct = allData.filter((prod) => prod.category === cat);
        }

        set({ filteredBook: tempProduct });
      },

      CALCULATE_MAX_MIN_PRICE: (allData) => {
        let priceAll: number[] = [];

        allData?.map((item) => {
          priceAll.push(item.price);
        });

        set({ MIN_PRICE: Math.min(...priceAll) });
        set({ MAX_PRICE: Math.max(...priceAll) });
      },

      FILTER_BY_PRICE: (allData, price) => {
        // convert string to number
        const myPrice = price;
        let tempProduct: IBook[] = [];

        tempProduct = allData?.filter((data) => data.price <= myPrice)

        set({ filteredBook: tempProduct });
      },

      SORT_PRODUCT: (allData, sort) => {
        let tempProduct: IBook[] = [];
        if (sort === "Letest") {
          tempProduct = allData;
        } else if (sort === "Price-Low-High") {
          // slice() use only for prevent ready only or frozen error
          tempProduct = allData.slice().sort((a, b) => a.price - b.price);
        } else if (sort === "Price-High-Low") {
          // slice() use only for prevent ready only or frozen error
          tempProduct = allData.slice().sort((a, b) => b.price - a.price);
        } else if (sort === "A-Z") {
          // slice() use only for prevent ready only or frozen error

          tempProduct = allData
            .slice()
            .sort((a, b) => a.title.localeCompare(b.title));
        } else if (sort === "Z-A") {
          // slice() use only for prevent ready only or frozen error

          tempProduct = allData
            .slice()
            .sort((a, b) => b.title.localeCompare(a.title));
        }

        set({ filteredBook: tempProduct });
      },
    }),
    { name: "SearchStore" }
  )
);

export default useSearchFilter;

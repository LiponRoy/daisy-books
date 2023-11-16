import { IBook } from "@/types/ndex";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ISearchStore {
  filteredBook: IBook[];
  FILTER_BY_SEARCH: (dataAll: IBook[], searchItem: string) => void;
  FILTER_BY_CATEGORY: (allData: IBook[], cat: string) => void;
}

const useSearchFilter = create<ISearchStore>()(
  devtools(
    (set) => ({
      filteredBook: [],
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
    }),
    { name: "SearchStore" }
  )
);

export default useSearchFilter;

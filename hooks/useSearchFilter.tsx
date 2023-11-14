import { IBook } from "@/types/ndex";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ISearchStore {
    filteredProducts: IBook[];
    FILTER_BY_SEARCH: (dataAll: IBook[], searchItem: string) => void;
}

const useSearchFilter = create<ISearchStore>()(
    devtools(
        (set) => ({
            filteredProducts: [],
            FILTER_BY_SEARCH: (dataAll, searchItem) => {
                const tempProducts = dataAll?.filter(
                    (item) =>
                        item.title.toLowerCase().includes(searchItem.toLowerCase()) ||
                        item.author.toLowerCase().includes(searchItem.toLowerCase())
                );

                set({ filteredProducts: tempProducts });
            },
        }),
        { name: "SearchStore" }
    )
);

export default useSearchFilter;

import { IBook } from "@/types/ndex";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ISearchStore {
    filteredBook: IBook[];
    FILTER_BY_SEARCH: (dataAll: IBook[], searchItem: string) => void;
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
        }),
        { name: "SearchStore" }
    )
);

export default useSearchFilter;

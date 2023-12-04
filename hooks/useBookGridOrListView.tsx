import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface BookGridOrListView {
    isListView: boolean;
    onTrue: () => void;
    onFalse: () => void;

}

const useBookGridOrListView = create<BookGridOrListView>()(devtools((set) => ({
    isListView: false,
    onTrue: () => set({ isListView: true }),
    onFalse: () => set({ isListView: false }),

}), { name: "BookGridOrListView" }));



export default useBookGridOrListView;

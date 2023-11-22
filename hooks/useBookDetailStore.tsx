import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
interface BookDetailStore {
    isOpen: boolean;
    bookId: string;
    onOpen: () => void;
    onClose: () => void;

}

const useBookDetailStore = create<BookDetailStore>()(devtools((set) => ({
    bookId: "",
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),

}), { name: "LoginModalStore" }));



export default useBookDetailStore;



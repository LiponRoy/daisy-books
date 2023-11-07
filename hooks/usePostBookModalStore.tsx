import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
interface PostBookModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

}

const usePostBookModalStore = create<PostBookModalStore>()(devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),

}), { name: "PostBookModalStore" }));



export default usePostBookModalStore;

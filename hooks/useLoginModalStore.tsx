import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
interface LoginModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

}

const useLoginModalStore = create<LoginModalStore>()(devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),

}), { name: "LoginModalStore" }));



export default useLoginModalStore;

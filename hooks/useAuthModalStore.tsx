import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
interface AuthModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

}

const useAuthModalStore = create<AuthModalStore>()(devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),

}), { name: "AuthModalStore" }));



export default useAuthModalStore;
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
interface RegisterModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

}

const useRegisterModalStore = create<RegisterModalStore>()(devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),

}), { name: "RegModalStore" }));



export default useRegisterModalStore;
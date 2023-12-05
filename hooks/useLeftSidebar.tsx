import { create } from 'zustand';

interface LeftSidebarStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;


}

const useLeftSidebar = create<LeftSidebarStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),

}));

export default useLeftSidebar;

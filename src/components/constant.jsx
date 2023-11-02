import { create } from 'zustand'
  export const useStore = create((set) => ({
    showMenu:false,
    exploreModal:false,
    formModal:false,
    showCart:false,
    count: 0,
    landing:true,
    showItems:false,
    increase: (val) => set((state) => ({ count:val })),
    handleShowMenu: (val) => set((state) => ({ showMenu: val })),
    handleExploreModal: (val) => set((state) => ({ exploreModal: val })),
    handleFormModal: (val) => set((state) => ({ formModal: val })),
    handleShowCart: (val) => set((state) => ({ showCart: val })),
    handleLanding: (val) => set((state) => ({ landing: val })),
    handleItems: (val) => set((state) => ({ showItems: val })),
  }))
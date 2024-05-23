import { create } from "zustand";

export const StateStore = create((set) => ({
    dropdown: false,
    setDropdown: () => set((state) => ({ dropdown: !(state.dropdown) }))
}))

export const useStoreSideBarDropDown = create((set) => ({
    dropDownKeyList: [],
    add: (key) => set((state) => ({ dropDownKeyList: [...state.dropDownKeyList, key] })),
    remove: (key) => set((state) => ({ dropDownKeyList: state.dropDownKeyList.filter((k) => k !== key) })),
}))


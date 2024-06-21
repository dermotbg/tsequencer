import { create } from "zustand";

interface IsDialogOrMenuOpenStoreType {
  isMobileMenuOpen: boolean;
  isUserMenuOpen: boolean;
  isSaveDialogOpen: boolean;
  isLoadDialogOpen: boolean;
  isRegisterDialogOpen: boolean;
  setIsMobileMenuOpen: (toggle: boolean) => void;
  setIsUserMenuOpen: (toggle: boolean) => void;
  setIsSaveDialogOpen: (toggle: boolean) => void;
  setIsLoadDialogOpen: (toggle: boolean) => void;
  setIsRegisterDialogOpen: (toggle: boolean) => void;
}

const useIsDialogOrMenuOpenStore = create<IsDialogOrMenuOpenStoreType>()((set) => ({
  isMobileMenuOpen: false,
  isUserMenuOpen: false,
  isSaveDialogOpen: false,
  isLoadDialogOpen: false,
  isRegisterDialogOpen: false,
  setIsMobileMenuOpen: (toggle: boolean) => set(() => ({ isMobileMenuOpen: toggle })),
  setIsUserMenuOpen: (toggle: boolean) => set(() => ({ isUserMenuOpen: toggle })),
  setIsSaveDialogOpen: (toggle: boolean) => set(() => ({ isSaveDialogOpen: toggle })),
  setIsLoadDialogOpen: (toggle: boolean) => set(() => ({ isLoadDialogOpen: toggle })),
  setIsRegisterDialogOpen: (toggle: boolean) => set(() => ({ isRegisterDialogOpen: toggle })),
}));

export default useIsDialogOrMenuOpenStore;

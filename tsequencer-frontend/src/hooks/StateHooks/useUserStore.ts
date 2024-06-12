import { create } from "zustand";

interface LoginStateType {
  username: string | null;
  userId: string | null;
  isAuthenticated: boolean;
  setUsername: (username: string | null) => void;
  setUserId: (userId: string | null) => void;
  setAuthenticated: (set: boolean) => void;
}

const useUserStore = create<LoginStateType>()((set) => ({
  username: null,
  userId: null,
  isAuthenticated: false,
  setUsername: (username: string | null) => set(() => ({ username })),
  setUserId: (userId: string | null) => set(() => ({ userId })),
  setAuthenticated: (toggle) => set(() => ({ isAuthenticated: toggle })),
}));

export default useUserStore;

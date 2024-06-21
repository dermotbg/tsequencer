import { create } from "zustand";

export interface UserAuthStoreType {
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  confPassword: string;
  setConfPassword: (confPassword: string) => void;
  newPassword: string;
  setNewPassword: (newPassword: string) => void;
  newUsername: string;
  setNewUsername: (newUsername: string) => void;
}

const useUserAuthStore = create<UserAuthStoreType>()((set) => ({
  username: "",
  password: "",
  confPassword: "",
  newPassword: "",
  newUsername: "",
  setUsername: (username: string) => set(() => ({ username })),
  setPassword: (password: string) => set(() => ({ password })),
  setConfPassword: (confPassword: string) => set(() => ({ confPassword })),
  setNewPassword: (newPassword: string) => set(() => ({ newPassword })),
  setNewUsername: (newUsername: string) => set(() => ({ newUsername })),
}));

export default useUserAuthStore;

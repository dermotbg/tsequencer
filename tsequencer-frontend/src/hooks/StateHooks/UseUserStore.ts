import { create } from "zustand"

interface LoginStateType {
  username: string | null
  isAuthenticated: boolean
  setUsername: (user: string | null) => void,
  setAuthenticated: (set: boolean) => void
}

const useUserStore = create<LoginStateType>()(
  (set) => ({
  username: null,
  isAuthenticated: false,
  setUsername: (username: string | null) => set(() => ({ username })),
  setAuthenticated: (toggle) => set(() => ({ isAuthenticated: toggle }))
})
)

export default useUserStore
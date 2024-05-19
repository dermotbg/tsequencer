import { create } from "zustand"

interface LoginStateType {
  user: string | null
  set: (user: string) => void
}

const useUserStore = create<LoginStateType>()((set) => ({
  user: null,
  set: (user) => set(() => ({ user }))
})
)

export default useUserStore
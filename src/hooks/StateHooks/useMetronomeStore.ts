import { create } from "zustand"

interface MetronomeStateType {
  active: boolean
  set: () => void
}

const useMetronomeStore = create<MetronomeStateType>()((set) => ({
  active: false,
  set: () => set((state) => ({ active: !state.active }))
})
)

export default useMetronomeStore
import { create } from "zustand"

interface ActiveStepStateType {
  activeStep: number | undefined
  set: (step: number | undefined) => void
}

const useActiveStepStore = create<ActiveStepStateType>()((set) => ({
  activeStep: undefined,
  set: (step) => set(() => ({ activeStep: step }))
})
)

export default useActiveStepStore
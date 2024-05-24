import { create } from "zustand"

interface MessageStateType {
  message: string | undefined
  set: (message: string | undefined) => void
}

const useMessageStore = create<MessageStateType>()((set) => ({
  message: undefined,
  set: (message) => set(() => ({ message }))
})
)

export default useMessageStore
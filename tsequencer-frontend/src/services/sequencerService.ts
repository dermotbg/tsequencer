import { Sequencer } from "../components/StepSequencerContainer/types"

interface SaveSeqType {
  sequence: Sequencer
  name: string
  username: string
}

const baseUrl = '/api/sequencer'

export const saveSequencer = async (SaveSeqObj: SaveSeqType ) => {
  try {
    const response = await fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(SaveSeqObj),
    })
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
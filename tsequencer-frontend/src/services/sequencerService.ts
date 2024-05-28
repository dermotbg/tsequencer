import { Sequencer } from "../components/StepSequencerContainer/types"

interface SaveSeqType {
  sequence: Sequencer
  name: string
  username: string
}
export interface LoadedSeqType {
  name: string
  sequence: Sequencer
  userId: string
} 

const baseUrl = '/api/sequencer'

export const saveSequencerAsync = async (SaveSeqObj: SaveSeqType ): Promise<Response> => {
  try {
    const response: Response = await fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(SaveSeqObj),
    })
    
    if(response.ok){
      return response
    }
    else{
      throw new Error(await response.text())
    }

  } catch (error) {
    let errorMessage = "Something went wrong: "
    if (error instanceof Error){
      errorMessage += error.message
    }
    throw new Error(`${errorMessage}`)
  }
}

export const loadSequencerAsync = async (username: string): Promise<LoadedSeqType[]> => {
  try {
    const response: Response = await fetch(`${baseUrl}/${username}`)

    if(response.ok){
      return response.json()
    }
    else{
      throw new Error(await response.text())
    }
  } catch (error) {
    let errorMessage = "Something went wrong: "
    if (error instanceof Error){
      errorMessage += error.message
    }
    throw new Error(`${errorMessage}`)
  }
}
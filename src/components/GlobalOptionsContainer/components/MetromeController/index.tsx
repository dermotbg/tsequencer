import useMetronomeStore from "../../../../hooks/StateHooks/useMetronomeStore"

const MetronomeController = () => {
  const metronome = useMetronomeStore()
  return(
    <>
      <input type="checkbox" name="metronome" onChange={() => metronome.set()} />
      <span className="slider round" >Metronome</span>    
    </>
  )
}
export default MetronomeController
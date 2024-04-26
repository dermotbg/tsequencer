import useMetronomeStore from "../../hooks/StateHooks/useMetronomeStore"

const MetronomeController = () => {
  const metronome = useMetronomeStore()
  return(
    <>
      <label className="switch"></label>
      <input type="checkbox" name="metronome" onChange={() => metronome.set()} />
      <span className="slider round" ></span>    
    </>
  )
}
export default MetronomeController
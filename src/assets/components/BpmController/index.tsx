import useSequencer from "../../../hooks/useSequencer"

const BpmController = () => {
  const sequencer = useSequencer()
  return (
    <>
      <input type="number" value={sequencer.bpm} min={25} max={300} onChange={(e) => sequencer.setBpm(parseInt(e.target.value))} />
    </>
  )
}
export default BpmController
import useBPMStore from "../../hooks/StateHooks/useBPMStore"

const BpmController = () => {
  const bpmController = useBPMStore()
  return (
    <>
      <input type="number" value={bpmController.bpm} min={25} max={300} onChange={(e) => bpmController.set(parseInt(e.target.value))} />
    </>
  )
}
export default BpmController
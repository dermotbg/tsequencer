import { Input } from "@/components/ui/input"

import useBPMStore from "../../../../../../hooks/StateHooks/useBPMStore"
import { Label } from "@/components/ui/label"

const BpmController = () => {
  const bpmController = useBPMStore()
  return (
    <div className="flex flex-row items-center">
      <Input id="bpm-value" type="number" value={bpmController.bpm} min={25} max={300} onChange={(e) => bpmController.set(parseInt(e.target.value))} />
      <Label className="pl-4" htmlFor="bpm-value">BPM</Label>
    </div>
  )
}
export default BpmController
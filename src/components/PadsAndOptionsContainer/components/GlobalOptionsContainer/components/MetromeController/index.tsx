import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

import useMetronomeStore from "../../../../../../hooks/StateHooks/useMetronomeStore"

const MetronomeController = () => {
  const metronome = useMetronomeStore()
  return(
    <div className="flex items-center space-x-2 pb-3">
      <Switch id="metronome" name="metronome" onCheckedChange={() => metronome.set()} />
      <Label htmlFor="metronome" >Metronome</Label>    
    </div>
  )
}
export default MetronomeController
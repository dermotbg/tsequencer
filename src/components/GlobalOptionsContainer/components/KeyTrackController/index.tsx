import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const KeyTrackController = ({ keysActive, setKeysActive }: {keysActive: boolean, setKeysActive: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return(
    <div className="flex items-center space-x-2">
      <Switch id="keyTracking" name="keyTracking" onChange={() => setKeysActive(!keysActive)} />
      <Label htmlFor="keyTracking" >Key Tracking</Label>    
    </div>
  )
  // return(
  //   <>
  //     <input type="checkbox" name="keyTracking" onChange={() => setKeysActive(!keysActive)} />
  //     <span className="slider round" >Key Tracking</span>    
  //   </>
  // )
}
export default KeyTrackController
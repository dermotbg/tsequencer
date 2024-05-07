import { Button } from "@/components/ui/button"
import { Circle } from "lucide-react"

const RecordController = ({ recordHandler, isRecording }: { recordHandler: () => void, isRecording: boolean }) => {
  return (
    <Button 
      className={isRecording ? "p-8 border-4 border-red-custom rounded-md m-2" : "p-8 border-4 rounded-md m-2"} 
      onClick={() => recordHandler()} 
      role='switch'
    >
      <Circle color="#ff0000" />
    </Button>
  )

} 

export default RecordController
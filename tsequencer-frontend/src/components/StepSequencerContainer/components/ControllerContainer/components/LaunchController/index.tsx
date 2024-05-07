import { Button } from "@/components/ui/button"
import { Pause, Play } from "lucide-react"

const LaunchController = ({ launchHandler, isRunning }: { launchHandler: () => void, isRunning: boolean }) => {
  return (
    <Button 
    className={isRunning ? "p-8 border-4 border-green-custom rounded-md m-2" : "p-8 border-4 rounded-md m-2"}  
      onClick={() => launchHandler()} 
      role='switch'
    >
      {isRunning ? <Pause color="#00f529" /> : <Play color="#00f529" />}
    </Button>
  )

} 

export default LaunchController
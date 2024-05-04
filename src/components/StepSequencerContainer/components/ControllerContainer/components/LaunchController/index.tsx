import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

const LaunchController = ({ launchHandler, isRunning }: { launchHandler: () => void, isRunning: boolean }) => {
  return (
    <Button 
    className={isRunning ? "p-8 border-4 border-green-600 rounded-md m-2" : "p-8 border-4 rounded-md m-2"}  
      onClick={() => launchHandler()} 
      role='switch'
    >
      <Play color="#00f529" />
    </Button>
  )

} 

export default LaunchController
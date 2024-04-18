const LaunchController = ({ launchHandler }: { launchHandler: () => void }) => {

  return (
    <button 
      className="p-5 border-4 rounded-md m-2" 
      onClick={() => launchHandler()} 
      role='switch'
    >
      Play/Stop
    </button>
  )

} 

export default LaunchController
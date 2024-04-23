const RecordController = ({ recordHandler }: { recordHandler: () => void }) => {

  return (
    <button 
      className="p-5 border-4 rounded-md m-2" 
      onClick={() => recordHandler()} 
      role='switch'
    >
      Record
    </button>
  )

} 

export default RecordController
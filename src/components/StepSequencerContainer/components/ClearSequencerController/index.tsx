const ClearSequencerController = ({ clearSequencer }: { clearSequencer: () => void } ) => {

  return (
    <button 
      className="p-5 border-4 rounded-md m-2" 
      onClick={() => clearSequencer()} 
    >
      Clear
    </button>
  )

} 

export default ClearSequencerController
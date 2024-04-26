const KeyTrackController = ({ keysActive, setKeysActive }: {keysActive: boolean, setKeysActive: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return(
    <>
      <input type="checkbox" name="keyTracking" onChange={() => setKeysActive(!keysActive)} />
      <span className="slider round" >Key Tracking</span>    
    </>
  )
}
export default KeyTrackController
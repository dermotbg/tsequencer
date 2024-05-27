import { AvailableInstruments } from "../../../../../../types"


type FaderInstrumentTypes = AvailableInstruments | 'Pad' 

const FaderDetails = ({ instrument, gain }: { instrument: FaderInstrumentTypes, gain: number }) => {

  return(
    <div className='flex flex-col overflow-hidden '> 
      <div className="font-mono max-w-10 sm:max-w-inherit overflow-hidden ">{instrument.toUpperCase()}</div> 
      <div>{((gain / 3.4) * 100).toFixed(0)}%</div>
    </div>
  )

}

export default FaderDetails
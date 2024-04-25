import { AvailableInstruments } from "../../../../../../types"


type FaderInstrumentTypes = AvailableInstruments | 'Pad' | 'Inactive'

const FaderDetails = ({ instrument, gain }: { instrument: FaderInstrumentTypes, gain: number }) => {

  return(
    <div className='flex flex-col'> 
      <div>{instrument}</div> 
      <div>{((gain / 3.4) * 100).toFixed(0)}%</div>
    </div>
  )

}

export default FaderDetails
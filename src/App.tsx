import GlobalOptionsContainer from './components/GlobalOptionsContainer'
import InstrumentPadContainer from './components/InstrumentPadContainer'
import MixingDeskContainer from './components/MixingDeskContainer'
import StepSequencerContainer from './components/StepSequencerContainer'

function App() {
  return (
    <div className='text-center' >
      <GlobalOptionsContainer />
      <InstrumentPadContainer />
      <StepSequencerContainer />
      <MixingDeskContainer />
    </div>
  )
}

export default App

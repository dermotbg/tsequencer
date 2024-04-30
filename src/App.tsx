import './App.css'
import GlobalOptionsContainer from './components/GlobalOptionsContainer'
import InstrumentPadContainer from './components/InstrumentPadContainer'
import MixingDeskContainer from './components/MixingDeskContainer'
import StepSequencerContainer from './components/StepSequencerContainer'

function App() {
  return (
    <>
      <GlobalOptionsContainer />
      <InstrumentPadContainer />
      <StepSequencerContainer />
      <MixingDeskContainer />
    </>
  )
}

export default App

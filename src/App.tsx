import './App.css'
import BpmController from './components/BpmController'
import InstrumentPadContainer from './components/InstrumentPadContainer'
import MixingDeskContainer from './components/MixingDeskContainer'
import StepSequencerContainer from './components/StepSequencerContainer'

function App() {
  return (
    <>
      <BpmController/>
      <InstrumentPadContainer />
      <StepSequencerContainer />
      <MixingDeskContainer />
    </>
  )
}

export default App

import './App.css'
import BpmController from './components/BpmController'
import InstrumentPadContainer from './components/InstrumentPadContainer'
import MetronomeController from './components/MetromeController'
import MixingDeskContainer from './components/MixingDeskContainer'
import StepSequencerContainer from './components/StepSequencerContainer'

function App() {
  return (
    <>
      <BpmController/>
      <MetronomeController />
      <InstrumentPadContainer />
      <StepSequencerContainer />
      <MixingDeskContainer />
    </>
  )
}

export default App

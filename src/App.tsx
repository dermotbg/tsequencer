import './App.css'
import BpmController from './assets/components/BpmController'
import InstrumentPadContainer from './assets/components/InstrumentPadContainer'
import StepSequencerContainer from './assets/components/StepSequencerContainer'

function App() {
  return (
    <>
      <BpmController/>
      <InstrumentPadContainer />
      <StepSequencerContainer />
    </>
  )
}

export default App

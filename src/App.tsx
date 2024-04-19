import './App.css'
import BpmController from './components/BpmController'
import InstrumentPadContainer from './components/InstrumentPadContainer'
import StepSequencerContainer from './components/StepSequencerContainer'

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

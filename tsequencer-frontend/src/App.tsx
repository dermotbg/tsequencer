import MixingDeskContainer from './components/MixingDeskContainer'
import StepSequencerContainer from './components/StepSequencerContainer'
import PadsAndOptionsContainer from './components/PadsAndOptionsContainer'
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className='text-center text-slate-200' >
      <PadsAndOptionsContainer />
      <StepSequencerContainer />
      <MixingDeskContainer />
      <Toaster />
    </div>
  )
}

export default App

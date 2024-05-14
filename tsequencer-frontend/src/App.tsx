import MixingDeskContainer from './components/MixingDeskContainer'
import StepSequencerContainer from './components/StepSequencerContainer'
import PadsAndOptionsContainer from './components/PadsAndOptionsContainer'
import Navbar from './components/NavBarContainer'

function App() {
  return (
    <div className='text-center text-slate-200' >
      <Navbar />
      <PadsAndOptionsContainer />
      <StepSequencerContainer />
      <MixingDeskContainer />
    </div>
  )
}

export default App

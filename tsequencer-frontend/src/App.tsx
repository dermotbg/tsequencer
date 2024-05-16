import MixingDeskContainer from './components/MixingDeskContainer'
import StepSequencerContainer from './components/StepSequencerContainer'
import PadsAndOptionsContainer from './components/PadsAndOptionsContainer'

function App() {
  return (
    <div className='text-center text-slate-200' >
      <PadsAndOptionsContainer />
      <StepSequencerContainer />
      <MixingDeskContainer />
    </div>
  )
}

export default App

import MixingDeskContainer from "./components/MixingDeskContainer";
import PadsAndOptionsContainer from "./components/PadsAndOptionsContainer";
import StepSequencerContainer from "./components/StepSequencerContainer";

function App() {
  return (
    <div className="text-center text-slate-200">
      <PadsAndOptionsContainer />
      <StepSequencerContainer />
      <MixingDeskContainer />
    </div>
  );
}

export default App;

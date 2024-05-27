import GlobalOptionsContainer from "./components/GlobalOptionsContainer"
import InstrumentPadContainer from "./components/InstrumentPadContainer"

const PadsAndOptionsContainer = () => {

  return(
    <div className="flex flex-col items-center justify-center">
      <GlobalOptionsContainer />
      <InstrumentPadContainer />
    </div>
  )
}

export default PadsAndOptionsContainer
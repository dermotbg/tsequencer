import GlobalOptionsContainer from "./components/GlobalOptionsContainer"
import InstrumentPadContainer from "./components/InstrumentPadContainer"

const PadsAndOptionsContainer = () => {

  return(
    <div className="flex flex-row flex-wrap items-center justify-center m4">
      <GlobalOptionsContainer />
      <InstrumentPadContainer />
    </div>
  )
}

export default PadsAndOptionsContainer
import './App.css'

function App() {

  const kick = new Audio('https://cdn.freesound.org/previews/91/91627_1281492-lq.mp3')
  const clap = new Audio('https://cdn.freesound.org/previews/561/561118_12517458-lq.mp3')
  const closedHat = new Audio('https://cdn.freesound.org/previews/269/269720_4965320-lq.mp3')

  const launchPad = (element: HTMLAudioElement) => {
    element.currentTime = 0
    element.play()
  }

  return (
    <>
      <button 
        className="box-border h-32 w-32 border-4 rounded-md m-2"
        onClick={() => launchPad(kick)}
        >
        Kick
      </button>
      <button 
        className="box-border h-32 w-32 border-4 rounded-md m-2"
        onClick={() => launchPad(clap)}
        >
        Clap
      </button>
      <button 
        className="box-border h-32 w-32 border-4 rounded-md m-2"
        onClick={() => launchPad(closedHat)}
        >
        Closed HH
      </button>
    </>
  )
}

export default App

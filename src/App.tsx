import { useState } from 'react'
import './App.css'


function App() {

  const [killswitch, setKillswitch] = useState<number | undefined>()
  const [bpm, setBpm] = useState(140)

  const kick = new Audio('https://cdn.freesound.org/previews/91/91627_1281492-lq.mp3')
  const clap = new Audio('https://cdn.freesound.org/previews/561/561118_12517458-lq.mp3')
  const closedHat = new Audio('https://cdn.freesound.org/previews/269/269720_4965320-lq.mp3')
  const metroUp = new Audio('https://cdn.freesound.org/previews/250/250551_4570971-lq.mp3')
  const metroDown = new Audio('https://cdn.freesound.org/previews/250/250552_4570971-lq.mp3')

  const sequencer = (): void => {
    let activePoint: number = 0
      setKillswitch(
        setInterval(() => {
          if(activePoint === 0){
            console.log('up')
            metroUp.currentTime = 0
            metroUp.play()
          }
    
          else if(activePoint === 4 || activePoint === 8 || activePoint === 12) {
            console.log('down')
            metroDown.currentTime = 0
            metroDown.play()
          }
          else{
            console.log(activePoint)
          }
          activePoint++
    
          if(activePoint === 16) activePoint = 0
        }, ((60 / bpm) * 1000) / 4)
      ) 
    }

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
      {/* button below has to change to stop multiple intervals */}
      <button onClick={() => sequencer()}>Play</button>
      <button onClick={() => clearInterval(killswitch)}>Stop</button>
    </>
  )
}

export default App

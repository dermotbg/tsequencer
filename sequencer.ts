
const bpm: number = 120
const metroUp: string = 'audio/250551__druminfected__metronomeup.wav'
const metroDown: string = 'audio/250552_druminfected__metronome.wav'


const seq = Array(15)

// pointer to the active step of the seq
let activePoint: number = 0

// metronome to fire clicks on 1,2,3,4
// let metronome: number = activePoint

let playing: boolean = true


setTimeout(() => {
  playing = false
}, 5000)

let killswitch;

while (playing) {
  killswitch = setInterval(() => {
    activePoint++
    if(activePoint === 15) activePoint = 0
  }, ((bpm / 60) / 16))
}

clearInterval(killswitch)

// for 4/4 time

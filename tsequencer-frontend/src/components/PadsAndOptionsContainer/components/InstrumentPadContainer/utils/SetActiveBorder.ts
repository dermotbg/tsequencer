export const setActiveBorder = (activePad: string | undefined, instrument: string ) => {
  switch (activePad && instrument) {
    case 'kick':
      if(activePad === 'kick') {
        return "box-border h-32 w-32 border-4 rounded-md m-2 border-lime-400 text-white m-4 text-xl bg-stone-700 shadow-lg shadow-stone-950"
      }
      else {
        return "box-border h-32 w-32 border-4 rounded-md m-2 text-black m-4 text-xl bg-stone-700 border-stone-800 shadow-lg shadow-stone-950"
      }
    case 'clap':
      if(activePad === 'clap') {
        return "box-border h-32 w-32 border-4 rounded-md m-2 border-orange-500 text-white m-4 text-xl bg-stone-700 shadow-lg shadow-stone-950"
      }
      else {
        return "box-border h-32 w-32 border-4 rounded-md m-2 text-black m-4 text-xl bg-stone-700 border-stone-800 shadow-lg shadow-stone-950"
      }
      case 'snare':
        if(activePad === 'snare') {
          return "box-border h-32 w-32 border-4 rounded-md m-2 border-blue-500 text-white m-4 text-xl bg-stone-700 shadow-lg shadow-stone-950"
        }
        else {
          return "box-border h-32 w-32 border-4 rounded-md m-2 text-black m-4 text-xl bg-stone-700 border-stone-800 shadow-lg shadow-stone-950"
        }
    case 'closedHH':
      if(activePad === 'closedHH') {
        return "box-border h-32 w-32 border-4 rounded-md m-2 border-purple-400 text-white m-4 text-xl bg-stone-700 shadow-lg shadow-stone-950"
      }
      else {
        return "box-border h-32 w-32 border-4 rounded-md m-2 text-black m-4 text-xl bg-stone-700 border-stone-800 shadow-lg shadow-stone-950"
      }
      case 'openHH':
      if(activePad === 'openHH') {
        return "box-border h-32 w-32 border-4 rounded-md m-2 border-pink-400 text-white m-4 text-xl bg-stone-700 shadow-lg shadow-stone-950"
      }
      else {
        return "box-border h-32 w-32 border-4 rounded-md m-2 text-black m-4 text-xl bg-stone-700 border-stone-800 shadow-lg shadow-stone-950"
      }
    case 'ride':
      if(activePad === 'ride') {
        return "box-border h-32 w-32 border-4 rounded-md m-2 border-red-custom text-white m-4 text-xl bg-stone-700 shadow-lg shadow-stone-950"
      }
      else {
        return "box-border h-32 w-32 border-4 rounded-md m-2 text-black m-4 text-xl bg-stone-700 border-stone-800 shadow-lg shadow-stone-950"
      }
    case 'sub':
      if(activePad === 'sub') {
        return "box-border h-32 w-32 border-4 rounded-md m-2 border-white text-white m-4 text-xl bg-stone-700 shadow-lg shadow-stone-950"
      }
      else {
        return "box-border h-32 w-32 border-4 rounded-md m-2 text-black m-4 text-xl bg-stone-700 border-stone-800 shadow-lg shadow-stone-950"
      }
    case 'perc':
      if(activePad === 'perc') {
        return "box-border h-32 w-32 border-4 rounded-md m-2 border-cyan-500 text-white m-4 text-xl bg-stone-700 shadow-lg shadow-stone-950"
      }
      else {
        return "box-border h-32 w-32 border-4 rounded-md m-2 text-black m-4 text-xl bg-stone-700 border-stone-800 shadow-lg shadow-stone-950"
      }
    case 'perc2':
      if(activePad === 'perc2') {
        return "box-border h-32 w-32 border-4 rounded-md m-2 border-green-500 text-white m-4 text-xl bg-stone-700 shadow-lg shadow-stone-950"
      }
      else {
        return "box-border h-32 w-32 border-4 rounded-md m-2 text-black m-4 text-xl bg-stone-700 border-stone-800 shadow-lg shadow-stone-950"
      }
    case 'perc3':
      if(activePad === 'perc3') {
        return "box-border h-32 w-32 border-4 rounded-md m-2 border-yellow-500 text-white m-4 text-xl bg-stone-700 shadow-lg shadow-stone-950"
      }
      else {
        return "box-border h-32 w-32 border-4 rounded-md m-2 text-black m-4 text-xl bg-stone-700 border-stone-800 shadow-lg shadow-stone-950"
      }
    case 'perc4':
      if(activePad === 'perc4') {
        return "box-border h-32 w-32 border-4 rounded-md m-2 border-emerald-500 text-white m-4 text-xl bg-stone-700 shadow-lg shadow-stone-950"
      }
      else {
        return "box-border h-32 w-32 border-4 rounded-md m-2 text-black m-4 text-xl bg-stone-700 border-stone-800 shadow-lg shadow-stone-950"
      }
    case 'perc5':
      if(activePad === 'perc5') {
        return "box-border h-32 w-32 border-4 rounded-md m-2 border-sky-500 text-white m-4 text-xl bg-stone-700 shadow-lg shadow-stone-950"
      }
      else {
        return "box-border h-32 w-32 border-4 rounded-md m-2 text-black m-4 text-xl bg-stone-700 border-stone-800 shadow-lg shadow-stone-950"
      }
    default:
      return "box-border h-32 w-32 border-4 rounded-md m-2 text-black m-4 text-xl bg-stone-700 border-stone-800 shadow-lg shadow-stone-950"
  }
}
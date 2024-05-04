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
    case 'closedHH':
      if(activePad === 'closedHH') {
        return "box-border h-32 w-32 border-4 rounded-md m-2 border-purple-400 text-white m-4 text-xl bg-stone-700 shadow-lg shadow-stone-950"
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
    default:
      return "box-border h-32 w-32 border-4 rounded-md m-2 text-black m-4 text-xl bg-stone-700 border-stone-800 shadow-lg shadow-stone-950"
  }
}
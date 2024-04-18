export const setActiveBorder = (activePad: string | undefined, instrument: string ) => {
  switch (activePad && instrument) {
    case 'kick':
      if(activePad === 'kick') {
        return "box-border h-32 w-32 border-4 rounded-md m-2 border-lime-400"
      }
      else {
        return "box-border h-32 w-32 border-4 rounded-md m-2"
      }
    case 'clap':
      if(activePad === 'clap') {
        return "box-border h-32 w-32 border-4 rounded-md m-2 border-blue-400"
      } 
      else {
        return "box-border h-32 w-32 border-4 rounded-md m-2"
      } 
    case 'closedHH':
      if(activePad === 'closedHH') {
        return "box-border h-32 w-32 border-4 rounded-md m-2 border-amber-400"
      }
      else  {
        return "box-border h-32 w-32 border-4 rounded-md m-2"
      }
    case 'ride':
      if(activePad === 'ride') {
        return "box-border h-32 w-32 border-4 rounded-md m-2 border-cyan-400"
      }
      else  {
        return "box-border h-32 w-32 border-4 rounded-md m-2"
      }
    default:
      return "box-border h-32 w-32 border-4 rounded-md m-2"
  }
}
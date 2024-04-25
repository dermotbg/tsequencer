/** @type {import('tailwindcss').Config} */

// TODO: proper color theme and proper mixing for combinations
// combos below are just copy pasted kick combos!!

const shadow = '0px 10px 15px -3px'
const kick = '#a3e635'
const clap = '#60a5fa'
const closedHH = '#fbbf24'
const ride = '#22d3ee'
const kickClap = '#7EC3A0'
const kickClosedHH = '#CBD42D'
const kickRide = '#5DDC9A'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'kick': `${shadow} ${kick}`,
        'clap': `${shadow} ${clap}`,
        'closedHH': `${shadow} ${closedHH}`,
        'ride': `${shadow} ${ride}`,

        'kick-clap': `${shadow} ${kickClap}`,
        'kick-closedHH': `${shadow} ${kickClosedHH}`,
        'kick-ride': `${shadow} ${kickRide}`,

        'clap-kick': `${shadow} ${kickClap}`,
        'clap-closedHH':`${shadow} ${kickClosedHH}`,
        'clap-ride': `${shadow} ${kickRide}`,
        
        'closedHH-kick': `${shadow} ${kickClap}`,
        'closedHH-clap':  `${shadow} ${kickClosedHH}`,
        'closedHH-ride': `${shadow} ${kickRide}`,

        'ride-kick': `${shadow} ${kickClap}`,
        'ride-clap':  `${shadow} ${kickClosedHH}`,
        'ride-closedHH': `${shadow} ${kickRide}`,


      }
    },
  },
  plugins: [],
}


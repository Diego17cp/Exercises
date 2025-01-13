import { useState } from 'react'
import { Pad } from './components/Pad';
import { Controls } from './components/Controls';
import './App.css'

const heaterKit = [
  { keyCode: 81, keyTrigger: "Q", id: "Heater-1", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  { keyCode: 87, keyTrigger: "W", id: "Heater-2", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  { keyCode: 69, keyTrigger: "E", id: "Heater-3", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  { keyCode: 65, keyTrigger: "A", id: "Heater-4", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
  { keyCode: 83, keyTrigger: "S", id: "Clap", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  { keyCode: 68, keyTrigger: "D", id: "Open-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  { keyCode: 90, keyTrigger: "Z", id: "Kick-n'-Hat", url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
  { keyCode: 88, keyTrigger: "X", id: "Kick", url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  { keyCode: 67, keyTrigger: "C", id: "Closed-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }
];

const smoothPianoKit = [
  { keyCode: 81, keyTrigger: "Q", id: "Chord-1", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },
  { keyCode: 87, keyTrigger: "W", id: "Chord-2", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" },
  { keyCode: 69, keyTrigger: "E", id: "Chord-3", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" },
  { keyCode: 65, keyTrigger: "A", id: "Shaker", url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" },
  { keyCode: 83, keyTrigger: "S", id: "Open-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" },
  { keyCode: 68, keyTrigger: "D", id: "Closed-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" },
  { keyCode: 90, keyTrigger: "Z", id: "Punchy-Kick", url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },
  { keyCode: 88, keyTrigger: "X", id: "Side-Stick", url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },
  { keyCode: 67, keyTrigger: "C", id: "Snare", url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" }
];

function App() {
  const [power, setPower] = useState(true)
  const [bank, setBank] = useState(heaterKit)
  const [volume, setVolume] = useState(0.5)
  const [display, setDisplay] = useState(String.fromCharCode(160))
  const [currentPadBankId, setCurrentPadBankId] = useState('Heater Kit')

  const togglePower = () => {
    setPower(!power)
    setDisplay(String.fromCharCode(160))
  }
  const toggleBank = () => {
    if(power){
      if (bank === heaterKit){
        setBank(smoothPianoKit)
        setDisplay('Smooth Piano Kit')
        setCurrentPadBankId('Smooth Piano Kit')
      }else{
        setBank(heaterKit)
        setDisplay('Heater Kit')
        setCurrentPadBankId('Heater Kit')
      }
    }
  }
  const updateDisplay = (songName) => {
    if(power){
      setDisplay(songName)
    }
  }
  const adjustVolume = (e) => {
    if(power) {
      const newVolume = e.target.value
      setVolume(newVolume)
      setDisplay(`Volume: ${Math.round(newVolume * 100)}`)
      setTimeout(() => {
        setDisplay(String.fromCharCode(160))
      }, 1000)
    }
  }


  return (
    <main className='app'>
      <Pad currentPadBank={bank} power={power} updateDisplay={updateDisplay} volume={volume}></Pad>
      <Controls volume={volume} display={display} toggleBank={toggleBank} togglePower={togglePower} adjustVolume={adjustVolume} power={power} bank={currentPadBankId}></Controls>
    </main>
  )
}

export default App

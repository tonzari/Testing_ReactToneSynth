import * as Tone from "tone";
import { useRef } from "react";

const synth = new Tone.PolySynth().toDestination();
let freqs = [30,60,90,120];
let num = 2;

function playSynth() {
  synth.triggerAttackRelease(freqs, 0.01)
  increaseFreqs();
}

function increaseFreqs() {
  freqs = freqs.map(f =>  f * num );
  console.log(freqs)
}

function resetFreqs() {
  freqs = [30,60,90,120];
}

function App() {

  const numberRef = useRef();

  function handleChangeNumber(e) {
     num = numberRef.current.value;
  }

  return (
    <div>
      <button id="button" onClick={ playSynth }>click for synth note</button>
      <button onClick={ resetFreqs }>reset</button>
      <input ref={numberRef} type="number" />
      <button onClick={ handleChangeNumber }>change frequency increment value</button>
    </div>
  );
}

export default App;

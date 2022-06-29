import * as Tone from "tone";
import { useRef } from "react";

function App() {
  const synth = new Tone.PolySynth().toDestination();
  let freqs = [20, 120, 220, 320];
  let num = 49;

  function playSynth() {
    synth.triggerAttackRelease(freqs, 0.01);
    increaseFreqs();
  }

  function increaseFreqs() {
    freqs = freqs.map((f) => f + +num);
    console.log(freqs);
  }

  function resetFreqs() {
    freqs = [20, 120, 220, 320];
  }
  const numberRef = useRef();

  function handleChangeNumber(e) {
    num = numberRef.current.value;
    console.log(num);
  }

  return (
    <div>
      <button id="button" onClick={playSynth}>
        click for synth note
      </button>
      <button onClick={resetFreqs}>reset</button>
      <input
        ref={numberRef}
        onMouseUp={handleChangeNumber}
        type="range"
        min="0"
        max="100"
      />
    </div>
  );
}

export default App;

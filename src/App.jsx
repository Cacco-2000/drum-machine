import './App.css';
import DrumPads from './DrumPads';
import { useState } from 'react';
import { useEffect } from 'react';


function DrumMachine(){
  const [displayMessage, setDisplayMessage] = useState("Play a sound!"); 

  function handleKeyDown(event) {
    const key = event.key.toUpperCase();
    const audio = document.getElementById(key);
    const drumPad = document.getElementById(audio?.parentElement.id);

    if (audio && drumPad) {
      audio.play();
      setDisplayMessage(audio.parentElement.id);

      drumPad.classList.add('active');
      setTimeout(() => drumPad.classList.remove('active'), 200);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function updateDisplay(message) {
    setDisplayMessage(message);
  }
  
  return(
    <div id="drum-machine">
      <h1>Drum Machine</h1>
      <div id="display">
        <p>{displayMessage}</p>
      </div>
      <DrumPads updateDisplay={updateDisplay} />
    </div>

  );
}

export default DrumMachine;






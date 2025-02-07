import './App.css';
import PropTypes from 'prop-types';
import { useState } from 'react';



const drumPads = [{key:'Q', id:'Heater-1', src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
    {key:'W', id:'Heater-2', src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
    {key:'E', id:'Heater-3', src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
    {key:'A', id:'Heater-4', src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
    {key:'S', id:'Clap', src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
    {key:'D', id:'Open-HH', src:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
    {key:'Z', id:'Kick-n-Hat', src:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
    {key:'X', id:'Kick', src:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
    {key:'C', id:'Closed-HH', src:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}, 
  ];

function DrumPads({ updateDisplay }) {
    return (
        <div className="drum-pads">
      {drumPads.map((pad) => (
        <DrumPad
          key={pad.key}
          keyTrigger={pad.key}
          id={pad.id}
          src={pad.src}
          updateDisplay={updateDisplay}
        />
      ))}
    </div>
    );
}

DrumPads.propTypes = {
    updateDisplay: PropTypes.func.isRequired,
  };

function DrumPad({ keyTrigger, id, src, updateDisplay }) {
    const [isActive, setIsActive] = useState(false);
    function playSound() {
        const audio = document.getElementById(keyTrigger);
        audio.play();
        updateDisplay(id); 
        setIsActive(true);
        setTimeout(() => setIsActive(false), 200);
    }
    return (
        <div
            className={`drum-pad ${isActive ? 'active' : ''}`} // Aggiunge la classe "active" se è attivo
            id={id}
            onClick={playSound}
        >
            {keyTrigger}
            <audio className="clip" id={keyTrigger} src={src}></audio>
        </div>
    );
}

DrumPad.propTypes = {
    keyTrigger: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    updateDisplay: PropTypes.func.isRequired,
  };
  

export default DrumPads;

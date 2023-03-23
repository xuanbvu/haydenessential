import React from 'react';
import Popup from './Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import help from '../assets/help.gif';
import './HowToPlay.css';

const HowToPlay = ({ closePopup }) => {
  return (
    <Popup closePopup={closePopup}>
      <div className='how-to-play' onClick={e => e.stopPropagation()}>
        <h2 className='popup-title'>How To Play</h2>
        <button className='popup-exit' onClick={closePopup}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <hr />
        <div className='how-to-play-content'>
          <p>Try to get each of the 5 horizontal words connect in as few moves as possible.</p>
          <p>Click/tap two letters to swap them. Puzzles can be solved in as few as 8 moves.</p>
          <img src={help} alt='GIF of an example Quintessential game' />
          <p><span style={{ color: 'var(--green)' }}><b>Green</b></span> is correct.</p>
          <p><span style={{ color: 'var(--yellow)' }}><b>Yellow</b></span> is in the correct word, but in the wrong position.</p>
          <p><span style={{ color: 'var(--lightgray)' }}><b>Gray</b></span> belongs in another word.</p>
        </div>
      </div>
    </Popup>
  )
}

export default HowToPlay
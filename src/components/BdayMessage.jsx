import React from 'react';
import Popup from './Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './BdayMessage.css';

const BdayMessage = ({ closePopup }) => {
  return (
    <Popup closePopup={closePopup} onClick={(e) => e.stopPropagation()}>
      <div className='bday-message'>
        <h2 className='popup-title'>To Hayden</h2>
        <button className='popup-exit' onClick={closePopup}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <hr />
        <p><b>Happy 23<sup>rd</sup> birthday shawty !!</b></p>
        <p>I hope you enjoy this Quintessential dupe. Thank you for teaching me the correct way to play and for all the other ways you've changed me into a better person.</p>
        <p>I love spending time with you no matter what we do, but I take a special pride in being your Wordle partner.</p>
        <p>I hope to be there with you for all your
          <span style={{ color: 'var(--green)' }}><b> correct</b></span>,
          <span style={{ color: 'var(--yellow)' }}><b> almost correct</b></span>, and even
          <span style={{ color: 'var(--lightgray)' }}><b> wrong</b></span> guesses.
          <span style={{ color: 'var(--medgray)' }}> (God I cringe)</span>
        </p>
        
        <p><b>You deserve to have the most wonderful day (and year) of being 23 {'<3'}</b></p>
      </div>
    </Popup>
  )
}

export default BdayMessage
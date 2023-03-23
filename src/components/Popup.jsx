import React from 'react';
import './Popup.css';

const Popup = ({ children, closePopup }) => {
  return (
    <div className='popup' onClick={closePopup}>
      <div className='dim-background' />
      {children}
    </div>
  )
}

export default Popup
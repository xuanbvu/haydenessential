import React from 'react';
import './Done.css';

const SAYINGS = {
  8: "Perfect!",
  9: "Amazing!",
  10: "Great!",
  11: "Good!",
  12: "Not Bad!",
};

const Done = ({ moves }) => {
  return (
    <div className='tiles-container'>
      <div className='done'>{SAYINGS[moves] || 'Done!'}</div>
    </div>
  )
}

export default Done
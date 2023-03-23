import React from 'react';
import Popup from './Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import DateDifference from '../helper/DateDifference';
import './Statistics.css';

const STATS_CHART = [
  {
    "category": "nerd",
    "percent": "50%",
    "color": "var(--green)"
  },
  {
    "category": "slayyy",
    "percent": "85%",
    "color": "var(--yellow)"
  },
  {
    "category": "giggler",
    "percent": "35%",
    "color": "var(--orange)"
  },
  {
    "category": "sassy",
    "percent": "60%",
    "color": "var(--brown)"
  },
  {
    "category": "best bf",
    "percent": "100%",
    "color": "var(--medgray)"
  },
]

const WEBSITE_URL = 'https://haydenessential.vercel.app';

const Statistics = ({
  closePopup,
  won,
  moves,
  animations
}) => {
  const shareStats = (e) => {
    e.target.innerHTML = "Copied!";
    navigator.clipboard.writeText(`${WEBSITE_URL} #100 (secret message): ${moves} moves`);
    setTimeout(() => {
      e.target.innerHTML = "Share";
    }, 2000);
  }

  return (
    <Popup closePopup={closePopup}>
      <motion.div
        className='statistics'
        key='statistics'
        onClick={e => e.stopPropagation()}
        {...animations}
      >
        <h2 className='popup-title'>Statistics</h2>
        <button className='popup-exit' onClick={closePopup}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <hr />
        <div className='statistics-content'>
          <h3>Birthday</h3>
          <div className='stats-row'>
            <div className='stat'>
              <p>{DateDifference(new Date('04/10/2000'))}</p>
              <p>Days</p>
            </div>
            <div className='stat'>
              <p>23</p>
              <p>Max Streak</p>
            </div>
            <div className='stat'>
              <p>{(23/77 * 100).toFixed(2)}%</p>
              <p>% Lived*</p>
            </div>
          </div>
          {won && (
            <>
              <h3>Game</h3>
              <div className='stats-row'>
                <div className='stat'>
                    <p>100</p>
                    <p>Puzzle #</p>
                </div>
                <div className='stat'>
                  <p>{moves}</p>
                  <p>Moves</p>
                </div>
                <div className='stat'>
                  <p>1</p>
                  <p>Streak</p>
                </div>
              </div>
              <button className='statistics-share' onClick={(e) => shareStats(e)}>Share</button>
              <h3>Personality</h3>
              <div className='statistics-chart'>
                {STATS_CHART.map(({category, percent, color}) => {
                  return (
                    <>
                      <p>{category}</p>
                      <div style={{ width: `${percent}`, backgroundColor: `${color}` }}>{percent}</div>
                    </>
                  )
                })}
              </div>
            </>
          )}
          <p className='statistics-blurb'>* Assuming life expectancy is 77 years old.</p>
        </div>
      </motion.div>
    </Popup>
  )
}

export default Statistics
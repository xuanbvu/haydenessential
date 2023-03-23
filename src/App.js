import React, { useState } from 'react';
import Tile from './components/Tile';
import HowToPlay from './components/HowToPlay';
import Statistics from './components/Statistics';
import BdayMessage from './components/BdayMessage';
import Done from './components/Done';
import WordsToLetters from './helper/WordsToLetters';
import WordsToTiles from './helper/WordsToTiles';
import LocalStorage from './helper/LocalStorage';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faChartSimple,
  faCakeCandles,
  faRotateRight
} from '@fortawesome/free-solid-svg-icons';
import './App.css';

window.$ANSWER_ARR = WordsToLetters(["super", "happy", "while", "being", "yours"]);
const STARTING_TILES = ["eusor", "gaihy", "ypiln", "bspeh", "weurp"];

function App() {
  const [moves, setMoves] = LocalStorage('haydenssential-moves', 0);
  const [currentTiles, setCurrentTiles] = LocalStorage('haydenssential-current-tiles', WordsToTiles(STARTING_TILES));
  const [gameWon, setGameWon] = LocalStorage('haydenssential-game-won', false);

  const [showDone, setShowDone] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [showBdayMessage, setShowBdayMessage] = useState(false);

  const popupAnimations = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 24 },
    transition: { duration: 0.25 }
  }

  const resetGame = () => {
    localStorage.removeItem('haydenssential-moves');
    localStorage.removeItem('haydenssential-current-tiles');
    localStorage.removeItem('haydenssential-game-won');
    window.location.reload(false);
  }

  const clickTiles = () => {
    const activeTiles = document.getElementsByClassName("active");
    const swappedTiles = [];

    for (let i = 0; i < activeTiles.length; i++) {
      swappedTiles.push(activeTiles[i].id);
    }

    if (activeTiles.length === 2) {
      setTimeout(() => {
        clearActiveTiles();
        swapTiles(swappedTiles);
      }, 250);
      
    }
  }
  const clearActiveTiles = () => {
    const tiles = document.getElementsByClassName("letter");
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].classList.remove("active");
    }
  }
  const swapTiles = (tiles) => {
    const firstTile = tiles[0];
    const secondTile = tiles[1];

    const tempArr = [...currentTiles];
    const tempVal = tempArr[firstTile];
    tempArr[firstTile] = tempArr[secondTile];
    tempArr[secondTile] = tempVal;
    
    setCurrentTiles([...tempArr]);
    setMoves(moves + 1);

    if (tempArr.map(obj => obj.letter).every((val, i) => val === window.$ANSWER_ARR[i])) {
      setShowDone(true);
      setGameWon(true);
      setTimeout(() => {
        setShowDone(false);
        setShowStatistics(true);
      }, 2000);
    }
  }

  return (
    <div className='quintessential'>
      <div className='header'>
        <button onClick={() => setShowHowToPlay(true)}>
          <FontAwesomeIcon icon={faCircleQuestion} />
        </button>
        <span />
        <h1>Haydenssential</h1>
        <button onClick={() => setShowStatistics(true)}>
          <FontAwesomeIcon icon={faChartSimple} />
        </button>
        <button onClick={() => setShowBdayMessage(true)}>
          <FontAwesomeIcon icon={faCakeCandles} />
        </button>
      </div>
      <div className='info'>
        <p><b>#100</b> Apr 10 2023</p>
        <p><b>THEME</b> SECRET MESSAGE</p>
      </div>
      <div className='tiles'>
        {currentTiles.map(({letter, i}, currPos) => {
          return (
            <motion.div
              key={`${letter}${i}`}
              layout
              transition={{
                type: 'spring',
                damping: 40,
                stiffness: 400
              }}
            >
              <Tile
                letter={letter}
                currPos={currPos}
                clickTiles={clickTiles}
                currentTiles={currentTiles}
                key={`tile${i}`}
              />
            </motion.div>
            
          )
        })}
        {showDone && <Done moves={moves} />}
      </div>
      <p>{moves} Moves</p>
      {gameWon && 
        <button className='reset-button' onClick={resetGame}>
          Restart{' '}
          <FontAwesomeIcon icon={faRotateRight} />
        </button>
      }
      <AnimatePresence>
        {showHowToPlay && <HowToPlay closePopup={() => setShowHowToPlay(false)} animations={popupAnimations} />}
      </AnimatePresence>
      <AnimatePresence>
        {showStatistics && <Statistics
          closePopup={() => setShowStatistics(false)}
          won={gameWon}
          moves={moves}
          animations={popupAnimations}
        />}
      </AnimatePresence>
      <AnimatePresence>
        {showBdayMessage && <BdayMessage closePopup={() => setShowBdayMessage(false)} animations={popupAnimations} />}
      </AnimatePresence>
    </div>
  );
}

export default App;

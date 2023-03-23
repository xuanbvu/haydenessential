import React, { useState } from 'react';
import Tile from './components/Tile';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faChartSimple, faCakeCandles } from '@fortawesome/free-solid-svg-icons';
import HowToPlay from './components/HowToPlay';
import Statistics from './components/Statistics';
import BdayMessage from './components/BdayMessage';
import Done from './components/Done';
import WordsToLetters from './helper/WordsToLetters';
import WordsToTiles from './helper/WordsToTiles';
import './App.css';

window.$ANSWER_ARR = WordsToLetters(["super", "happy", "while", "being", "yours"]);
const STARTING_TILES = ["eusor", "gaihy", "ypiln", "bspeh", "weurp"];

function App() {
  // TODO: local storage to store
  const [moves, setMoves] = useState(0);
  const [currentTiles, setCurrentTiles] = useState(WordsToTiles(STARTING_TILES));
  const [gameWon, setGameWon] = useState(false);

  const [showDone, setShowDone] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [showBdayMessage, setShowBdayMessage] = useState(false);

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
        <p><b>#69</b> Apr 10 2023</p>
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
      {showHowToPlay && <HowToPlay closePopup={() => setShowHowToPlay(false)} />}
      {showStatistics && <Statistics closePopup={() => setShowStatistics(false)} won={gameWon} moves={moves} />}
      {showBdayMessage && <BdayMessage closePopup={() => setShowBdayMessage(false)} />}
    </div>
  );
}

export default App;

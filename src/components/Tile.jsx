import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Tile.css';

const Tile = ({
  letter,
  currPos,
  clickTiles,
  currentTiles
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    clickTiles();
  }, [active])

  useEffect(() => {
    tilePosition();
    setActive(false);
  }, [clickTiles])

  const tilePosition = () => {
    const correctLetter = window.$ANSWER_ARR[currPos];
    const correctWord = window.$ANSWER_ARR.slice(Math.floor(currPos/5)*5, Math.floor(currPos/5)*5 + 5);

    if (letter === correctLetter) {
      return "correct";
    } else if (correctWord.includes(letter)) {
      const currWord = currentTiles.slice(Math.floor(currPos/5)*5, Math.floor(currPos/5)*5 + 5);
      const index = correctWord.findIndex(l => l === letter);

      if (currWord[index].letter !== correctWord[index]) {
        return "almost";
      }
    }
    return "wrong";
  }
  
  return (
    <motion.div
      className={`letter ${tilePosition()} ${active && tilePosition() !== 'correct' && 'active'}`}
      id={currPos}
      onClick={() => setActive(!active)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {letter}
    </motion.div>
  )
}

export default Tile
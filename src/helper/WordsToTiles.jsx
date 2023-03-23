const WordsToTiles = (array) => {
  const tiles = [];
  array.map((word, i) => {
    word.split('').map((letter, j) => {
      tiles.push({
        "letter": letter,
        "i": i * 5 + j
      })
    });
  })
  return tiles;
}

export default WordsToTiles
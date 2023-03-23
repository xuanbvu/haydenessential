const WordsToLetters = (array) => {
  const letters = [];
  array.map(word => {
    word.split('').map(letter => letters.push(letter));
  })
  return letters;
}

export default WordsToLetters
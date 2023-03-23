const DateDifference = (date) => {
  const now = new Date();
  
  const differenceMs = now.getTime() - date.getTime();
  const differenceDay = differenceMs / (1000 * 3600 * 24);

  return Math.floor(differenceDay);
}

export default DateDifference
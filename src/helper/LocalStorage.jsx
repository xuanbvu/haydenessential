import React, { useState, useEffect } from "react"

const LocalStorage = (storageKey, defaultValue) => {
  // console.log(JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue)
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue);
  console.log(value)

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, setValue]);
  
  return [value, setValue];
}

export default LocalStorage
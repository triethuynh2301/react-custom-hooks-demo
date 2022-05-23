import { useEffect, useState } from "react";

/**
 *
 * @param {string} key - an item stored in localStorage
 * @param {*} defaultValue - the default value of the item if not yet specified in localStorage
 * @returns an array of [value, setValue] to update value and its state
 */
const useLocalStorageState = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    // if the item does not exist in localStorage -> set default value
    if (!localStorage.getItem(key)) {
      return defaultValue;
    }

    // if item is in localStorage -> get the value of item
    return JSON.parse(localStorage.getItem(key));
  });

  // when the item or the value changes -> update item in localStorage
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorageState;

import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (intitVal, key) => {
    const [ darkMode, setDarkMode ] = useLocalStorage(intitVal, key);

    return [ darkMode, setDarkMode ];
}
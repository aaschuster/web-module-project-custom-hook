import { useState } from "react";

export const useDarkMode = (intitVal) => {
    const [ darkMode, setDarkMode ] = useState(intitVal);

    return [ darkMode, setDarkMode ];
}
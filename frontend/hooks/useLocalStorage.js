import { useState } from "react";

export const useLocalStorage = (initVal, key) => {
    const [ storedVal, setStoredVal ] = useState(() => {
        if(window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        }
        window.localStorage.setItem(key, JSON.stringify(initVal));
        return initVal;
    });

    const setVal = val => {
        setStoredVal(val);
        window.localStorage.setItem(key, JSON.stringify(val));
    }

    return [storedVal, setVal];
}
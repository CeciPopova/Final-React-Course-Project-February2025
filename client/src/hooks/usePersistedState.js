import { useState } from "react";

export default function usePersistedState(stateKey, initialState) {
    const [state, setState] = useState(() => {
        try {
            const persistedState = localStorage.getItem(stateKey);
            if (!persistedState) {
                return typeof initialState === 'function' ? initialState() : initialState;
            }
            return JSON.parse(persistedState);
        } catch (error) {
            console.error("Error reading from localStorage:", error);
            return typeof initialState === 'function' ? initialState() : initialState;
        }
    });

    const setPersistedState = (input) => {
        try {
            const data = typeof input === 'function' ? input(state) : input;
            const persistedData = JSON.stringify(data);
            localStorage.setItem(stateKey, persistedData);
            setState(data);
        } catch (error) {
            console.error("Error writing to localStorage:", error);
        }
    };

    return [state, setPersistedState];
}

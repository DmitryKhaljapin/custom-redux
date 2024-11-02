import React, { useReducer } from 'react';
import { createContext } from 'react';
import { appReducer } from './app.reducer';

interface AppContext {
    incCounter: number,
    decCounter: number,
    dispatch?: (action: any) => void;
}

const initialValues = {
    incCounter: 0,
    decCounter: 0
};

export const CounterContext = createContext<AppContext>(initialValues);

export function Provider({ children }) {
    const [store, dispatch] = useReducer(appReducer, initialValues)

    return (
        <CounterContext.Provider value={{
            incCounter: store.incCounter,
            decCounter: store.decCounter,
            dispatch
        }}>
            {children}
        </CounterContext.Provider>
    )
}
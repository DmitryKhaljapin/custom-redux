import React, { ReactNode } from 'react';
import { Store } from './createStore';
import { ReduxContext } from './Context';

interface ProviderProps<S> {
    store: Store<S>;
    children: ReactNode;
};

export function Provider<S>({store, children}: ProviderProps<S>) {
    const Context = ReduxContext

    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
}
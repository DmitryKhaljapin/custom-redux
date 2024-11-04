import { Action, Reducer } from './combineReducers';

type Listener = () => void;

export interface Store<S> {
    state: S;
    listeners: Listener[]
    dispatch: (action: Action) => void;
    subscribe: (listener: Listener) => () => void
    getState: () => S
}

export function createStore<S>(rootReducer: Reducer<S>): Store<S> {
    let state = null;
    let listeners: Listener[] = [];

    function dispatch(action: Action) {
        const newState = rootReducer(state, action);

        state = newState;

        listeners.forEach((listener: Listener) => listener());

        return action;
    }

    function subscribe(listener: Listener) {
        listeners = [...listeners, listener];

        return () => {
            listeners.filter( (l: Listener) => l !== listener);
        };
    }

    function getState() {
        return state
    }

    const store = {
        listeners,
        state,
        dispatch,
        subscribe,
        getState
    };

    dispatch({type: 'init'})

    return store;
}
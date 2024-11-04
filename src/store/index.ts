import { combineReducers } from '../redux/combineReducers';
import { createStore } from '../redux/createStore';
import { decCounterReducer } from './decCounter.reducer';
import { incCounterReducer } from './incCounter.reducer';

export interface CountersState {
    inc: {value: number},
    dec: {value: number},
}

const rootReducer = combineReducers<CountersState>({
    inc: incCounterReducer,
    dec: decCounterReducer
});

export const store = createStore<CountersState>(rootReducer);
export interface Action {
    type: string
    payload?: any
};

export type Reducer<S = any> = (state: S, action: Action) => S; 

export type Reducers = Record<string, Reducer>

export function combineReducers<S>(reducers: Reducers): Reducer<S> {
    return function combination(state: S, action: Action) {
        const reducerKeys = Object.keys(reducers);

        let hasChanged = false;
        const nextState = {} as S;

        if (!state) state = nextState;

        for (let key of reducerKeys) {
          const reducer = reducers[key]
          const previousStateForKey = state[key]
          const nextStateForKey = reducer(previousStateForKey, action)
          
          nextState[key] = nextStateForKey
          hasChanged = hasChanged || nextStateForKey !== previousStateForKey
        }

        return hasChanged ? nextState : state
    } 
}
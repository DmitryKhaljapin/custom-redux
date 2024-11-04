import { useMemo, useSyncExternalStore } from 'react';
import { store } from '../../store';

type Selector = (state: any) => typeof state[keyof typeof state];

export function useSelector(selector: Selector) {
    const currentState = selector(store.getState())
    
    const getSelection = useMemo(() => {
        let hasMemo = false;
        let memoizedState: any;
        let memoizedSelection: any;

        const memoizedSelector = (nextState: any) => {
            if(!hasMemo) {
                hasMemo = true;
                memoizedState = nextState;
                const nextSelection = selector(nextState);

                memoizedSelection = nextSelection;
                return nextSelection;
            }

            const prevState = memoizedState;
            const prevSelection = memoizedSelection;

            if (prevState === nextState) return prevSelection;

            const nextSelection = selector(nextState);

            memoizedState = nextState;
            memoizedSelection = nextSelection;

            return nextSelection;
        }

        const getStateWithSelector = () => memoizedSelector(store.getState())

        return getStateWithSelector;

    }, [selector, store.getState])
    
    useSyncExternalStore(store.subscribe, getSelection)

    return currentState
}
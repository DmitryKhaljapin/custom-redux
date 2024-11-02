enum ActionType {
    increment = 'INCREMENT',
    decrement = 'DECREMENT'
};

interface Action {
    type: ActionType
}

interface AppStore {
    incCounter: number;
    decCounter: number;
}

export function appReducer(store: AppStore, action: Action) {
    switch(action.type) {
        case 'INCREMENT': {
            const newStore = {
                ...store,
                incCounter: ++store.incCounter
            }
            return newStore
        }
        case 'DECREMENT': {
            const newStore = {
                ...store,
                decCounter: --store.decCounter
            }
            return newStore
        }
        default: {
            return store
        }
    }
}
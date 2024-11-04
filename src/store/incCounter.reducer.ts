export enum ActionType {
    increment = 'INCREMENT'
};

interface Action {
    type: ActionType
};

interface State {
    value: number
};

const initialState: State = {
    value: 0
};

export function incCounterReducer(state: State = initialState, action: Action) {
    switch(action.type) {
        case ActionType.increment: {
            const newState = {
                ...state,
                value: ++state.value
            };

            return newState; 
        }
        default: {
            return state;
        }
    }
}

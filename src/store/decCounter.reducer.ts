export enum ActionType {
    decrement = 'DECREMENT'
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

export function decCounterReducer(state: State = initialState, action: Action) {
    switch(action.type) {
        case ActionType.decrement: {
            const newState = {
                ...state,
                value: --state.value
            };

            return newState;
        }
        default: {
            return state;
        }
    }
}
import React from 'react'
import { useSelector } from './redux/hooks/useSelector';
import { useDispatch } from './redux/hooks/useDispatch';
import { getIncCounter } from './store/selectors';
import { ActionType } from './store/incCounter.reducer';

export function IncCounter() {
    console.log('IncCounter')
    const value = useSelector(getIncCounter).value
    const dispatch = useDispatch();
    
    return (
        <div>
            <p>{value}</p>
            <button onClick={() => dispatch({type: ActionType.increment})}>increment</button>
        </div>
    )
}
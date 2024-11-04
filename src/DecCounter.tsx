import React from 'react'
import { useSelector } from './redux/hooks/useSelector'
import { useDispatch } from './redux/hooks/useDispatch';
import { getDecCounte } from './store/selectors';
import { ActionType } from './store/decCounter.reducer';

export function DecCounter() {
    console.log('DecCounter');

    const value = useSelector(getDecCounte).value;
    const dispatch = useDispatch();

    return (
        <div>
            <p>{value}</p>
            <button onClick={() => dispatch({type: ActionType.decrement})}>decrement</button>
        </div>
    )
}
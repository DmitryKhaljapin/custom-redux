import React, { useContext } from 'react'
import { CounterContext } from './context/app.context'

export function DecCounter() {
    console.log('DecCounter')
    const {decCounter, dispatch} = useContext(CounterContext)

    return (
        <div>
            <p>{decCounter}</p>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>decrement</button>
        </div>
    )
}
import React, { useContext } from 'react'
import { CounterContext } from './context/app.context'

export function IncCounter() {
    const {incCounter, dispatch} = useContext(CounterContext)

    console.log('IncCounter')
    return (
        <div>
            <p>{incCounter}</p>
            <button onClick={()=> dispatch({type: 'INCREMENT'})}>increment</button>
        </div>
    )
}
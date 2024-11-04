import { useContext } from 'react';
import { ReduxContext } from '../Context';

export function useDispatch() {
    const { dispatch } = useContext(ReduxContext)
    return dispatch
}
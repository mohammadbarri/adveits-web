import { createContext, useContext, useReducer, useState } from 'react';
import { useLocation } from 'react-router';


const AuthStateContext = createContext()
const AuthDispatchContext = createContext()



const initState = {
    cardNumber: 0,
    id: 0
}


function reducer(state = initState, action) {
    switch (action.type) {
        case 'addCart':
            const id = action.id;
            return {
                ...state, 
                cardNumber: state.cardNumber + 1,
                id,
            }
        case 'removeCard':
            return {
                ...state,
                cardNumber: 0,
                id: 0
            }


        default:
            return state
    }
}

export function useAuthState() {
    const context = useContext(AuthStateContext)

    return context;
}
export function useAuthDispatch() {
    const context = useContext(AuthDispatchContext)

    return context
}

export function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <AuthStateContext.Provider value={state} >
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider >
    )
}

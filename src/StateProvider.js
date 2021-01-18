
import React, {createContext, useContext, useReducer} from 'react'
// setup data layer
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext)
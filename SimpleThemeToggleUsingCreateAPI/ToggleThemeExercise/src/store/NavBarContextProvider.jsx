import { createContext, useReducer } from 'react';

export const NavContext = createContext();

// Reducer function
const navReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_NAV_TEXT':
            return {
                ...state,
                navText: state.navText === "" ? "navTextSize" : ""
            };
        default:
            return state;
    }
};

export default function NavContextProvider({ children }) {
    // Initialize state and dispatch using useReducer
    const [state, dispatch] = useReducer(navReducer, { navText: "" });

    // Function to dispatch the toggle action
    const handleNavText = () => {
        dispatch({ type: 'TOGGLE_NAV_TEXT' });
    };

    return (
        <NavContext.Provider value={{ navText: state.navText, handleNavText }}>
            {children}
        </NavContext.Provider>
    );
}

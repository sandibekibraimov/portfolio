import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

const initial_state = {
  darkMode: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initial_state);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

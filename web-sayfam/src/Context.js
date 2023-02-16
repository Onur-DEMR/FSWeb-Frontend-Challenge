import { createContext, useReducer } from "react";

export const context = createContext();
const initialState = { darkMode: false };
const reducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};
export const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <context.Provider value={{ state, dispatch }}>
      {props.children}
    </context.Provider>
  );
};

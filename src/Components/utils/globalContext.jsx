import React, { createContext, useReducer, useEffect, useMemo } from "react";
import axios from "axios";


export const ContextGlobal = createContext();



const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  // const inicialState = createTheme({
  //   palette: {
  //     mode: 'light',
  //   },
  // })
  const initalState = { bgFlag: "light", data: [] }

  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "dark":
        return {
          bgFlag: "light",
          data: state.data
        }
      case "light":
        return {
          bgFlag: "dark",
          data: state.data
        }
      case "data":
        return { ...state, data: action.payload }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducerFunction, initalState);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        dispatch({ type: "data", payload: res.data })
      })
      .catch((err) => console.log(err));
  }, [])



  const aplicacion = {
    state,
    dispatch,
  };
  return (
    <ContextGlobal.Provider value={aplicacion}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider
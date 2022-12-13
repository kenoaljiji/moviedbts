import React, { useReducer } from 'react';
import GlobalContext from './globalContext';
import moviesReducer from './moviesReducer';
import { initialState } from './types';

const MovieState = (props: any) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default MovieState;

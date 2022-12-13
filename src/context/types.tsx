import React from 'react';

export interface GlobalStateInterface {
  movies: object[];
  loading: boolean;
  videos: object;
  selectedMovie: any;
  category: string;
  dispatch?: React.Dispatch<ActionType>;
  setLoading?: Function;
  error?: string | null;
}

export type ActionType = {
  type: string;
  payload: any;
};

export interface ContextType {
  movies: object[];
  loading: boolean;
  videos: object;
  selectedMovie: any;
  category: string;
  error: string | null;
}

export const initialState: ContextType = {
  movies: [],
  loading: true,
  videos: {},
  selectedMovie: {},
  category: 'tv',
  error: null,
};

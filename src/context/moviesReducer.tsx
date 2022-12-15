import { ActionType, GlobalStateInterface } from '../types';

const moviesReducer = (state: GlobalStateInterface, action: ActionType) => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      const filteredMovie = action.payload.slice(0, 10);
      return {
        ...state,
        loading: false,
        movies: filteredMovie,
      };
    case 'MOVIE_DETAILS':
      return {
        ...state,
        loading: false,
        selectedMovie: action.payload,
      };
    case 'SEARCH_MOVIES':
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case 'GET_VIDEOS':
      return {
        ...state,
        loading: false,
        videos: action.payload,
      };

    case 'SET_CATEGORY':
      return {
        ...state,
        loading: false,
        category: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'SET_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;

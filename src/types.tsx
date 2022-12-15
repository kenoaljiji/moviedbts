import React from 'react';

export interface GlobalStateInterface {
  movies: object[];
  loading: boolean;
  videos?: VideoInterface;
  selectedMovie: iMovieInfo;
  category: string;
  dispatch?: React.Dispatch<ActionType>;
  error?: string | null;
}

export type ActionType = {
  type: string;
  payload: any;
};

/* export interface ContextType {
  movies: object[];
  loading: boolean;
  videos: object;
  selectedMovie: iMovieInfo;
  category: string;
  error: string | null;
} */

export interface VideoInterface {
  key?: string;
  name?: string;
}

export const initialState: GlobalStateInterface = {
  movies: [],
  loading: true,
  videos: {},
  selectedMovie: {},
  category: 'tv',
  error: null,
};

export interface iMovieInfo {
  name?: string;
  adult?: boolean;
  backdrop_path?: null | string;
  belongs_to_collection?: null;
  budget?: number;
  genres?: any[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: null;
  production_companies?: any[];
  production_countries?: any[];
  release_date?: Date | string;
  episode_run_time?: number;
  revenue?: number;
  runtime?: number;
  spoken_languages?: any[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: object;
  vote_average?: undefined | number;
  vote_count?: number;
  directors?: any[];
}

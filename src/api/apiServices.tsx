import axios from 'axios';
import { API_URL, API_KEY } from '../config';

// LIST TOP 10 MOVIES AND SERIES

export const listMovies = async (category: string, dispatch: Function) => {
    const url = `${API_URL}/${category}/top_rated?api_key=${API_KEY}&language=en-US`;

    try {
        dispatch({
            type: 'SET_LOADING',
            payload: true,
        });
        const res = await axios.get(url);

        dispatch({
            type: 'LOAD_MOVIES',
            payload: res.data.results,
        });
    } catch (error: any) {
        dispatch({
            type: 'SET_ERROR',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// GET MOVIE DETILAS

export const getMovieDetails = async (
    category: string,
    id: undefined | string,
    dispatch: Function,
) => {
    dispatch({
        type: 'SET_LOADING',
        payload: true,
    });

    const url = `${API_URL}/${category}/${id}?api_key=${API_KEY}&language=en-US`;

    try {
        const res = await axios.get(url);
        dispatch({
            type: 'MOVIE_DETAILS',
            payload: res.data,
        });
    } catch (error: any) {
        dispatch({
            type: 'SET_ERROR',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// GET MOVIE VIDEOS

export const getMovieVideo = async (
    category: string,
    id: undefined | string,
    dispatch: Function,
) => {
    try {
        dispatch({
            type: 'SET_LOADING',
            payload: true,
        });
        const url = `${API_URL}/${category}/${id}/videos?api_key=${API_KEY}&language=en-US`;

        const res = await axios.get(url);

        dispatch({
            type: 'GET_VIDEOS',
            payload: res.data.results[0],
        });
    } catch (error: any) {
        dispatch({
            type: 'SET_ERROR',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// SEARCH MOVIES

export const searchMovies = async (
    category: string,
    term: string,
    dispatch: Function,
) => {
    try {
        dispatch({
            type: 'SET_LOADING',
        });
        const url = `${API_URL}/search/${category}?api_key=${API_KEY}&language=en-US&query=${term}`;

        const res = await axios.get(url);

        dispatch({
            type: 'SEARCH_MOVIES',
            payload: res.data.results,
        });
    } catch (error: any) {
        dispatch({
            type: 'SET_ERROR',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

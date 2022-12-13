import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import globalContext from '../../context/globalContext';
import classes from './Movies.module.scss';
import { IMAGE_BASE_URL, NORMAL_SIZE } from '../../config';
import Spinner from '../UI/spinner/Spinner';

const Movies = () => {
  const GlobalContext = useContext(globalContext);

  const { state } = GlobalContext;

  const { loading, movies, category } = state;

  const navigate = useNavigate();

  const onSelectMovie = (id: number | string) => {
    navigate(`/${id}`);
  };

  return loading ? (
    <Spinner />
  ) : movies?.length === 0 ? (
    <p style={{ textAlign: 'center' }}>Cannot find title </p>
  ) : (
    <div className='container grid'>
      {movies?.map((movie: any) => (
        <div
          className={classes.card}
          key={movie.id}
          onClick={() => onSelectMovie(movie.id)}
        >
          <div className={classes.overlay}>
            {movie.poster_path ? (
              <div className={classes.img}>
                <img
                  src={`${IMAGE_BASE_URL}/${NORMAL_SIZE}${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            ) : (
              <div className={classes['error-picture']}>
                <h2 style={{ color: '#0daf69' }}>Movie DB</h2>
                <p className='my-1'>
                  {category === 'movie' ? movie.title : movie.name}
                </p>
                <p>(no picture)</p>
              </div>
            )}
            <div className={classes['card-body']}>
              <h3 className={classes['card-title']}>
                {category === 'movie' ? movie.title : movie.name}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;

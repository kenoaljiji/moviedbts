import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import globalContext from '../../context/globalContext';
import classes from '../movieDetails/MovieDetails.module.scss';
import { IMAGE_BASE_URL, NORMAL_SIZE, BACKDROP_SIZE } from '../../config';
import Spinner from '../UI/spinner/Spinner';
import Video from '../UI/video/Video';
import { getMovieVideo, getMovieDetails } from '../../api/apiServices';
import CSS from 'csstype';

const MovieDetails = () => {
    const GlobalContext = useContext(globalContext);

    const { state, dispatch } = GlobalContext;

    const navigate = useNavigate();

    const param = useParams();
    const { id } = param;

    const { selectedMovie, category, loading, videos } = state;

    useEffect(() => {
        getMovieVideo(category, id, dispatch);
        getMovieDetails(category, id, dispatch);
    }, [category, id, dispatch]);

    type Prop = {
        name: string;
    };

    const backgroundStyle: CSS.Properties = selectedMovie.backdrop_path
        ? {
              backgroundImage: `url(${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${selectedMovie.backdrop_path})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              minHeight: '100vh',
              position: 'relative',
          }
        : { backgroundColor: '#000' };

    return loading ? (
        <Spinner />
    ) : (
        <div style={backgroundStyle}>
            <div className={classes.overlay}>
                <div className={classes['movie-details']}>
                    <div
                        style={{ marginBottom: '2rem' }}
                        className={classes.button}
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </div>
                    <div className={classes['poster']}>
                        {videos ? (
                            <Video />
                        ) : (
                            <>
                                {selectedMovie.backdrop_path ? (
                                    <img
                                        src={`${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${selectedMovie.backdrop_path}`}
                                        alt=""
                                        className={classes.picture}
                                    />
                                ) : (
                                    <div className={classes['error-picture']}>
                                        <h2 style={{ color: '#0daf69' }}>
                                            Movie DB
                                        </h2>
                                        <p className="my-1">
                                            {category === 'movie'
                                                ? selectedMovie.title
                                                : selectedMovie.name}
                                        </p>
                                        <p>(no picture)</p>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                    <div className={classes.description}>
                        <h2 className={classes.title}>
                            {category === 'tv'
                                ? selectedMovie.name
                                : selectedMovie.title}
                        </h2>
                        <h5 className={classes.tagline}>
                            {selectedMovie.tagline}
                        </h5>
                        <p className={classes.text}>{selectedMovie.overview}</p>
                        {selectedMovie.genres && (
                            <div>
                                <div>
                                    <p style={{ marginTop: '3rem' }}>Genres</p>
                                    {selectedMovie.genres?.map(
                                        (genre: Prop, index: number) => (
                                            <h4
                                                className={classes.h4}
                                                key={index}
                                            >
                                                {genre.name}{' '}
                                            </h4>
                                        ),
                                    )}
                                </div>
                                <p className={classes.text}></p>
                            </div>
                        )}

                        <div className={classes['release-details']}>
                            {selectedMovie?.release_date && (
                                <div
                                    className={classes['release-details_item']}
                                >
                                    <p>Released</p>
                                    <h3 className={classes.h4}>
                                        {selectedMovie.release_date.toString()}
                                    </h3>
                                </div>
                            )}
                            {selectedMovie.vote_average && (
                                <div
                                    className={classes['release-details_item']}
                                >
                                    <p>Imbd</p>
                                    <h3 className={classes.h4}>
                                        {selectedMovie.vote_average}
                                    </h3>
                                </div>
                            )}

                            {selectedMovie.runtime && (
                                <div
                                    className={classes['release-details_item']}
                                >
                                    <p>Runing time</p>
                                    <h3 className={classes.h4}>
                                        {selectedMovie.runtime
                                            ? selectedMovie.runtime
                                            : selectedMovie.episode_run_time}{' '}
                                        min
                                    </h3>
                                </div>
                            )}

                            {selectedMovie.production_countries?.length > 0 && (
                                <div
                                    className={classes['release-details_item']}
                                >
                                    <p>Country</p>
                                    {selectedMovie.production_countries?.map(
                                        (country: Prop) => (
                                            <h3
                                                key={country.name}
                                                className={classes.h4}
                                            >
                                                {country.name}
                                            </h3>
                                        ),
                                    )}
                                </div>
                            )}
                            {selectedMovie.poster_path && (
                                <div
                                    className={classes['release-details_item']}
                                >
                                    <img
                                        style={{ width: '10rem' }}
                                        src={`${IMAGE_BASE_URL}/${NORMAL_SIZE}/${selectedMovie.poster_path}`}
                                        alt=""
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;

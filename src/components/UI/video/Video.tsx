import { useContext } from 'react';
import globalContext from '../../../context/globalContext';
import Spinner from '../spinner/Spinner';
import classes from './Video.module.scss';

const Video = () => {
    const GlobalContext = useContext(globalContext);

    const { state } = GlobalContext;

    const { videos, loading } = state;

    return (
        <div className={classes.videos}>
            {loading || !videos ? (
                <Spinner />
            ) : (
                <iframe
                    title="youtube"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay"
                    src={`https://www.youtube.com/embed/${videos.key}`}
                ></iframe>
            )}
        </div>
    );
};

export default Video;

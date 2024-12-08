import {useParams} from 'react-router-dom';
import {useGetMediaDetailQuery} from '../../services/media.service';
import {Loader} from '../../components';
import classes from './MediaDetail.module.scss';

function MediaDetail() {
  const {id} = useParams();
  const {data} = useGetMediaDetailQuery({id: id ?? ''});

  if (!data) {
    return <Loader />;
  }

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.posterWrapper}>
          <img
            src={data.Poster !== 'N/A' ? data.Poster : '/placeholder-image.png'}
            alt={data.Title}
            className={classes.poster}
          />
        </div>

        <div className={classes.info}>
          <h1 className={classes.title}>{data.Title}</h1>

          <div className={classes.meta}>
            <span>{data.Year}</span>
            {data.Runtime !== 'N/A' && (
              <>
                <span>•</span>
                <span>{data.Runtime}</span>
              </>
            )}
            {data.Genre !== 'N/A' && (
              <>
                <span>•</span>
                <span>{data.Genre}</span>
              </>
            )}
            {data.Rated !== 'N/A' && (
              <>
                <span>•</span>
                <span>{data.Rated}</span>
              </>
            )}
          </div>

          {data.Plot !== 'N/A' && <p className={classes.plot}>{data.Plot}</p>}

          <div className={classes.details}>
            {data.Director !== 'N/A' && (
              <div className={classes.detailItem}>
                <h3>Director</h3>
                <p>{data.Director}</p>
              </div>
            )}

            {data.Writer !== 'N/A' && (
              <div className={classes.detailItem}>
                <h3>Writers</h3>
                <p>{data.Writer}</p>
              </div>
            )}

            {data.Actors !== 'N/A' && (
              <div className={classes.detailItem}>
                <h3>Cast</h3>
                <p>{data.Actors}</p>
              </div>
            )}

            {data.imdbRating !== 'N/A' && (
              <div className={classes.detailItem}>
                <h3>IMDb Rating</h3>
                <p>{data.imdbRating} / 10</p>
              </div>
            )}

            {data.Awards !== 'N/A' && (
              <div className={classes.detailItem}>
                <h3>Awards</h3>
                <p>{data.Awards}</p>
              </div>
            )}

            {data.BoxOffice !== 'N/A' && (
              <div className={classes.detailItem}>
                <h3>Box Office</h3>
                <p>{data.BoxOffice}</p>
              </div>
            )}

            {data.Released !== 'N/A' && (
              <div className={classes.detailItem}>
                <h3>Release Date</h3>
                <p>{data.Released}</p>
              </div>
            )}

            {data.Language !== 'N/A' && (
              <div className={classes.detailItem}>
                <h3>Language</h3>
                <p>{data.Language}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaDetail;

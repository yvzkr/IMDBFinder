import {useLazyGetMediaListQuery} from '../../services/media.service';
import {ApiResponseWithSearch, MediaItem} from '../../interfaces';
import {MediaTable} from './components/MediaTable';
import classes from './MediaList.module.scss';
import {useApiKey} from '../../hooks';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setModalOpen} from '../../store/slices/apiKey.slice';

function MediaList() {
  const {apiKey} = useApiKey();
  const dispatch = useDispatch();
  const [
    getMedia,
    {data: mediaData = {} as ApiResponseWithSearch<MediaItem[]>, isFetching},
  ] = useLazyGetMediaListQuery();

  const handleOnChangeFilter = (query: string) => {
    if (!apiKey) {
      return;
    }

    getMedia({query, apiKey});
  };

  useEffect(() => {
    if (!apiKey) {
      return;
    }

    getMedia({query: '', apiKey});
  }, [apiKey]);

  const handleUpdateApiKey = () => {
    dispatch(setModalOpen(true));
  };

  return (
    <div className={classes.mediaList}>
      <div className={classes.pageTitle}>
        <h1>Media Library</h1>
        <button
          onClick={handleUpdateApiKey}
          className={classes.updateApiKeyButton}
        >
          Update API Key
        </button>
      </div>
      <div className={classes.contentWrapper}>
        <MediaTable
          mediaData={mediaData}
          onChangeFilter={handleOnChangeFilter}
          loading={isFetching}
        />
      </div>
    </div>
  );
}

export default MediaList;

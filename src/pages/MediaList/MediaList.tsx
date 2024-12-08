import {useLazyGetMediaListQuery} from '../../services/media.service';
import {ApiResponseWithSearch, MediaItem} from '../../interfaces';
import {MediaTable} from './components/MediaTable';
import classes from './MediaList.module.scss';

function MediaList() {
  const [
    getMedia,
    {data: mediaData = {} as ApiResponseWithSearch<MediaItem[]>, isFetching},
  ] = useLazyGetMediaListQuery();

  const handleOnChangeFilter = (query: string) => {
    getMedia({query});
  };

  return (
    <div className={classes.mediaList}>
      <h1 className={classes.pageTitle}>Media Library</h1>
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

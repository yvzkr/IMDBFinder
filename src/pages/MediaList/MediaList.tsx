import {useLazyGetMediaListQuery} from '../../services/media.service';
import {ApiResponse, MediaItem} from '../../interfaces';
import {MediaTable} from './components/MediaTable';
import classes from './MediaList.module.scss';

function MediaList() {
  const [
    getMedia,
    {data: mediaData = {} as ApiResponse<MediaItem[]>, isFetching},
  ] = useLazyGetMediaListQuery();

  const handleOnChangeFilter = (query: string) => {
    getMedia({query});
  };

  return (
    <div className={classes.mediaList}>
      <MediaTable
        mediaData={mediaData}
        onChangeFilter={handleOnChangeFilter}
        loading={isFetching}
      />
    </div>
  );
}

export default MediaList;

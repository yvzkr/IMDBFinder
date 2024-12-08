import {useCallback, useMemo} from 'react';
import {TableGrid} from '../../../../components';
import {Pagination} from '../../../../components/Pagination';
import {ApiResponse, MediaItem, TableGridParam} from '../../../../interfaces';
import {FilterTitle, FilterType, FilterYear} from './components';
import classes from './MediaTable.module.scss';
import {useDataGridParams} from '../../../../hooks';
import {useNavigate} from 'react-router-dom';

const ITEMS_PER_PAGE = 10;

function getQueryString(param: TableGridParam): string {
  return Object.entries(param)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}

interface MediaTableProps {
  mediaData: ApiResponse<MediaItem[]>;
  onChangeFilter: (query: string) => void;
  loading: boolean;
}

export function MediaTable({
  mediaData,
  onChangeFilter,
  loading,
}: MediaTableProps) {
  const {params, setParams} = useDataGridParams();
  const navigate = useNavigate();

  const rows = useMemo(() => {
    return (
      mediaData?.Search?.map(item => ({
        id: item.imdbID,
        items: [item.Title, item.imdbID, item.Year, item.Type],
      })) ?? []
    );
  }, [mediaData]);

  const totalPages = useMemo(() => {
    return mediaData?.totalResults !== undefined
      ? Math.ceil(mediaData.totalResults / ITEMS_PER_PAGE)
      : 0;
  }, [mediaData?.totalResults]);

  const handleOnChangeFilter = useCallback(
    (query: string) => {
      onChangeFilter(query);
    },
    [onChangeFilter]
  );

  const onPageChange = (page: number) => {
    setParams({...params, page});
    handleOnChangeFilter(getQueryString({...params, page}));
  };

  const handleOnChangeFilterValue = (key: string, value: string) => {
    setParams({...params, [key]: value});
    handleOnChangeFilter(getQueryString({...params, [key]: value}));
  };

  const handleOnClickRow = (id: string) => {
    navigate(`/${id}`);
  };

  return (
    <div className={classes.mediaTable}>
      <div className={classes.filterContainer}>
        <FilterTitle
          value={params.s ?? ''}
          onChange={value => handleOnChangeFilterValue('s', value)}
        />
        <FilterType
          value={params.type ?? ''}
          onChange={value => handleOnChangeFilterValue('type', value)}
        />
        <FilterYear
          value={params.y ?? ''}
          onChange={value => handleOnChangeFilterValue('y', value)}
        />
      </div>

      <TableGrid
        headers={['Title', 'IMDB Id', 'Year', 'Type']}
        rows={rows}
        loading={loading}
        onClickRow={item => handleOnClickRow(item)}
      />

      <Pagination
        currentPage={params.page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

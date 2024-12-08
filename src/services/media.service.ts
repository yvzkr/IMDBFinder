import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {MediaItem} from '../interfaces/media-item';
import {ApiResponseWithSearch, MediaItemExtended} from '../interfaces';

function buildEndpointWithQuery(value: string, query: string) {
  if (!query) {
    return value;
  }

  return `${value}?${query}`;
}

const baseUrl = 'https://www.omdbapi.com';

const apiKey = 'd6e263bd';

export const mediaService = createApi({
  reducerPath: 'media', // Redux store'daki anahtar
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getMediaList: builder.query<
      ApiResponseWithSearch<MediaItem[]>,
      {query: string}
    >({
      query: ({query}) => ({
        url: buildEndpointWithQuery('/', query),
        method: 'GET',
        params: {
          apikey: apiKey,
        },
      }),
    }),
    getMediaDetail: builder.query<MediaItemExtended, {id: string}>({
      query: ({id}) => ({
        url: '/',
        method: 'GET',
        params: {
          apikey: apiKey,
          i: id,
        },
      }),
    }),
  }),
});

export const {
  useGetMediaListQuery,
  useLazyGetMediaListQuery,
  useGetMediaDetailQuery,
} = mediaService;

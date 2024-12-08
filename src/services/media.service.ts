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

export const mediaService = createApi({
  reducerPath: 'media', // Redux store'daki anahtar
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getMediaList: builder.query<
      ApiResponseWithSearch<MediaItem[]>,
      {query: string; apiKey: string}
    >({
      query: ({query, apiKey}) => ({
        url: buildEndpointWithQuery('/', query),
        method: 'GET',
        params: {
          apikey: apiKey,
        },
      }),
    }),
    getMediaDetail: builder.query<
      MediaItemExtended,
      {id: string; apiKey: string}
    >({
      query: ({id, apiKey}) => ({
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

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {MediaItem} from '../interfaces/media-item';
import {ApiResponse} from '../interfaces';

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
    getMediaList: builder.query<ApiResponse<MediaItem[]>, {query: string}>({
      query: ({query}) => ({
        url: buildEndpointWithQuery('/', query),
        method: 'GET',
        params: {
          apikey: apiKey,
        },
      }),
    }),
  }),
});

export const {useGetMediaListQuery, useLazyGetMediaListQuery} = mediaService;

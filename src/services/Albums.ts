import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AlbumResponse, Entry } from '../@types/Album';
import { apiService } from '../utils/HelperUtils';

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiService() }),
  tagTypes: ['Album'],
  endpoints: (builder) => ({
    getResource: builder.query<Array<Entry>, string>({
      query: (limit) => `limit=${limit}/json`,
      transformResponse: (response: AlbumResponse) => response.feed.entry,
    }),
  }),
});

export const { useGetResourceQuery } = albumsApi;

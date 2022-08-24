import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { albumsApi } from './services/Albums';
import albumsReducer from './states/Albums';

/**
 * RTK Query has been used to avoid reinventing the LRU caching for apis
 */
export const store = configureStore({
  reducer: {
    [albumsApi.reducerPath]: albumsApi.reducer,
    favoriteAlbums: albumsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(albumsApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;

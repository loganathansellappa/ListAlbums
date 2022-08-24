/**
 * State Management
 * Simple actions to add/remove album in favorite list
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Entry } from '../@types/Album';

export interface AlbumsState {
  favourites: Array<Entry> | [];
}

export const initialState: AlbumsState = {
  favourites: [],
};

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Entry>) => {
      state.favourites = [...state.favourites, action.payload];
    },
    remove: (state, action: PayloadAction<string>) => {
      state.favourites = state.favourites.filter(
        (album) => action.payload !== album.id.attributes['im:id']
      );
    },
  },
});

export const { add, remove } = albumsSlice.actions;

export default albumsSlice.reducer;

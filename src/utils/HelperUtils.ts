/**
 * Utils functions
 */
import { Entry } from '../@types/Album';

export const apiService = () => `${process.env.MUSIC_URL}`;
export const dataLimit = () => `${process.env.DEFAULT_LIMIT}`;
export const filteredAlbums = (albums: Array<Entry>, typeHead: string) =>
  albums?.filter(
    (album: Entry) =>
      album.title.label.toLowerCase().includes(typeHead) ||
      album['im:name'].label.toLowerCase().includes(typeHead)
  );

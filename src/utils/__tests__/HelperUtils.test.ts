import { apiService, filteredAlbums } from '../HelperUtils';
import { mockResource } from '../tests';

describe('Helpers', () => {
  const OLD_ENV = process.env;
  const env = {
    MUSIC_URL: 'test',
  };

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV, ...env };
  });

  it('#apiService should return base url', () => {
    expect(apiService()).toEqual(env.MUSIC_URL);
  });

  it('#filteredAlbums should return matched data', () => {
    expect(filteredAlbums(mockResource().feed.entry, 'life').length).toEqual(1);
    expect(filteredAlbums(mockResource().feed.entry, 'Dummy').length).toEqual(
      0
    );
  });
});

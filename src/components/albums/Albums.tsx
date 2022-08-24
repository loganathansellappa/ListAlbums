import React, { useCallback, useEffect, useState } from 'react';
import Error from '../error/Error';
import { useGetResourceQuery } from '../../services/Albums';
import { Loader } from '../loader/Loader';
import { Entry } from '../../@types/Album';
import { Album } from '../album/Album';
import { dataLimit, filteredAlbums } from '../../utils/HelperUtils';
import './Albums.scss';

const Albums: React.FunctionComponent = () => {
  const [search, setSearch] = useState<string>('');
  const [emptySearchResult, setEmptySearchResult] = useState<boolean>(false);
  const updateSearch = useCallback(
    (val: string) => setSearch(val),
    [setSearch]
  );

  const { data, error, isLoading } = useGetResourceQuery(dataLimit(), {
    selectFromResult: ({ data, error, isLoading }) => {
      if (search) data = filteredAlbums(data as Array<Entry>, search);
      return {
        data,
        error,
        isLoading,
      };
    },
  });

  useEffect(() => {
    setEmptySearchResult((search && data?.length === 0) as boolean);
  }, [search, data]);

  if (error) return <Error />;

  return (
    <div className="albums-container">
      <div className="search">
        <input
          className={'searchInput'}
          value={search}
          placeholder="Search Album..."
          onChange={(e) => updateSearch((e.target as HTMLInputElement).value)}
        />
        {emptySearchResult ? (
          <div className={'searchHint'}>
            Album not found. You can search either by Name/Title.
          </div>
        ) : null}
      </div>
      {isLoading ? (
        <Loader className={'inline'} />
      ) : (
        <div className="albums">
          {data?.map((album: Entry) => (
            <Album key={album.id.attributes['im:id']} album={album} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Albums;

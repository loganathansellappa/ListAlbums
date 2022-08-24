import React, { useMemo } from 'react';
import { Entry } from '../../@types/Album';
import './Album.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { add, remove } from '../../states/Albums';

interface AlbumProps {
  album: Entry;
}

export const Album = ({ album }: AlbumProps) => {
  const dispatch = useDispatch();
  const isFavourite = useSelector((state: RootState) =>
    state.favoriteAlbums.favourites?.find(
      (p) => p.id.attributes['im:id'] === album.id.attributes['im:id']
    )
  );

  const setFavourite = () => {
    if (isFavourite) {
      dispatch(remove(album.id.attributes['im:id']));
      return;
    }
    dispatch(add(album));
  };

  const bgImage = useMemo(() => {
    const url = album['im:image']?.at(-1)?.label;
    return url ? <img src={url} alt={album['im:name'].label} /> : null;
  }, [album]);

  return (
    <div className="card">
      {bgImage}
      <div className={'name'}>
        <h3 className={'searchResult'}>{album['im:name'].label}</h3>
      </div>
      <div className="propContainer">
        <div className="props">
          <div className="value">{album.title.label || 'N/A'}</div>
        </div>
        <div className="props">
          <div className="label">Price</div>
          <div className="value">{album['im:price'].label || 'N/A'}</div>
        </div>
      </div>
      <div className="favourite" onClick={setFavourite}>
        <div className={isFavourite ? 'favouriteAlbum' : ''}>
          {!isFavourite ? 'Mark' : ''} Favourite
        </div>
        <div>
          <FontAwesomeIcon
            className={'favouriteIcon'}
            icon={faHeart}
            color={isFavourite ? 'red' : 'white'}
          />
        </div>
      </div>
    </div>
  );
};

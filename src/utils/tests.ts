import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

export const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};
export const testStore = () => {
  const mockStore = configureStore();
  const initialState = { favoriteAlbums: { favourites: [] } };
  const store = mockStore(initialState);
  return store;
};

export const mockResource = () => {
  return {
    feed: {
      author: {
        name: { label: 'iTunes Store' },
        uri: { label: 'http://www.apple.com/itunes/' },
      },
      entry: [
        {
          'im:name': { label: 'Life After Death' },
          'im:image': [
            {
              label:
                'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/5d/1b/af/5d1baf4a-496c-be36-b5c1-ba5bcea1c2c0/22UMGIM57228.rgb.jpg/55x55bb.png',
              attributes: { height: '55' },
            },
            {
              label:
                'https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/5d/1b/af/5d1baf4a-496c-be36-b5c1-ba5bcea1c2c0/22UMGIM57228.rgb.jpg/60x60bb.png',
              attributes: { height: '60' },
            },
            {
              label:
                'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/5d/1b/af/5d1baf4a-496c-be36-b5c1-ba5bcea1c2c0/22UMGIM57228.rgb.jpg/170x170bb.png',
              attributes: { height: '170' },
            },
          ],
          'im:itemCount': { label: '15' },
          'im:price': {
            label: '$10.99',
            attributes: { amount: '10.99', currency: 'USD' },
          },
          'im:contentType': {
            'im:contentType': { attributes: { term: 'Album', label: 'Album' } },
            attributes: { term: 'Music', label: 'Music' },
          },
          rights: {
            label:
              'ForeFront Records; ℗ 2022 F.L. Inc., under exclusive license to Capitol CMG, Inc.',
          },
          title: { label: 'Life After Death - TobyMac' },
          link: {
            attributes: {
              rel: 'alternate',
              type: 'text/html',
              href: 'https://music.apple.com/us/album/life-after-death/1626343519?uo=2',
            },
          },
          id: {
            label:
              'https://music.apple.com/us/album/life-after-death/1626343519?uo=2',
            attributes: { 'im:id': '1626343519' },
          },
          'im:artist': {
            label: 'TobyMac',
            attributes: {
              href: 'https://music.apple.com/us/artist/tobymac/635550?uo=2',
            },
          },
          category: {
            attributes: {
              'im:id': '22',
              term: 'Christian & Gospel',
              scheme:
                'https://music.apple.com/us/genre/music-christian/id22?uo=2',
              label: 'Christian',
            },
          },
          'im:releaseDate': {
            label: '2022-08-19T00:00:00-07:00',
            attributes: { label: 'August 19, 2022' },
          },
        },
        {
          'im:name': { label: 'Viva Las Vengeance' },
          'im:image': [
            {
              label:
                'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/bc/49/c6/bc49c6b9-9a12-dd6c-ac50-e4409cf8a094/075679762108.jpg/55x55bb.png',
              attributes: { height: '55' },
            },
            {
              label:
                'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/bc/49/c6/bc49c6b9-9a12-dd6c-ac50-e4409cf8a094/075679762108.jpg/60x60bb.png',
              attributes: { height: '60' },
            },
            {
              label:
                'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/bc/49/c6/bc49c6b9-9a12-dd6c-ac50-e4409cf8a094/075679762108.jpg/170x170bb.png',
              attributes: { height: '170' },
            },
          ],
          'im:itemCount': { label: '12' },
          'im:price': {
            label: '$9.99',
            attributes: { amount: '9.99', currency: 'USD' },
          },
          'im:contentType': {
            'im:contentType': { attributes: { term: 'Album', label: 'Album' } },
            attributes: { term: 'Music', label: 'Music' },
          },
          rights: {
            label:
              '℗ 2022 Fueled By Ramen LLC for the United States and WEA International Inc. for the world outside of the United States.  A Warner Music Group Company',
          },
          title: { label: 'Viva Las Vengeance - Panic! At the Disco' },
          link: {
            attributes: {
              rel: 'alternate',
              type: 'text/html',
              href: 'https://music.apple.com/us/album/viva-las-vengeance/1626561623?uo=2',
            },
          },
          id: {
            label:
              'https://music.apple.com/us/album/viva-las-vengeance/1626561623?uo=2',
            attributes: { 'im:id': '1626561623' },
          },
          'im:artist': {
            label: 'Panic! At the Disco',
            attributes: {
              href: 'https://music.apple.com/us/artist/panic-at-the-disco/80456331?uo=2',
            },
          },
          category: {
            attributes: {
              'im:id': '20',
              term: 'Alternative',
              scheme:
                'https://music.apple.com/us/genre/music-alternative/id20?uo=2',
              label: 'Alternative',
            },
          },
          'im:releaseDate': {
            label: '2022-08-19T00:00:00-07:00',
            attributes: { label: 'August 19, 2022' },
          },
        },
        {
          'im:name': {
            label: 'Finally Enough Love: 50 Number Ones (2022 Remasters)',
          },
          'im:image': [
            {
              label:
                'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/f8/70/c2/f870c27d-81f3-08b7-f66d-b7dc3ffe6a1f/603497839797.jpg/55x55bb.png',
              attributes: { height: '55' },
            },
            {
              label:
                'https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/f8/70/c2/f870c27d-81f3-08b7-f66d-b7dc3ffe6a1f/603497839797.jpg/60x60bb.png',
              attributes: { height: '60' },
            },
            {
              label:
                'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/f8/70/c2/f870c27d-81f3-08b7-f66d-b7dc3ffe6a1f/603497839797.jpg/170x170bb.png',
              attributes: { height: '170' },
            },
          ],
          'im:itemCount': { label: '50' },
          'im:price': {
            label: '$24.99',
            attributes: { amount: '24.99', currency: 'USD' },
          },
          'im:contentType': {
            'im:contentType': { attributes: { term: 'Album', label: 'Album' } },
            attributes: { term: 'Music', label: 'Music' },
          },
          rights: { label: '℗ 2022 Warner Records LLC.' },
          title: {
            label:
              'Finally Enough Love: 50 Number Ones (2022 Remasters) - Madonna',
          },
          link: {
            attributes: {
              rel: 'alternate',
              type: 'text/html',
              href: 'https://music.apple.com/us/album/finally-enough-love-50-number-ones-2022-remasters/1622113557?uo=2',
            },
          },
          id: {
            label:
              'https://music.apple.com/us/album/finally-enough-love-50-number-ones-2022-remasters/1622113557?uo=2',
            attributes: { 'im:id': '1622113557' },
          },
          'im:artist': {
            label: 'Madonna',
            attributes: {
              href: 'https://music.apple.com/us/artist/madonna/20044?uo=2',
            },
          },
          category: {
            attributes: {
              'im:id': '14',
              term: 'Pop',
              scheme: 'https://music.apple.com/us/genre/music-pop/id14?uo=2',
              label: 'Pop',
            },
          },
          'im:releaseDate': {
            label: '2022-08-19T00:00:00-07:00',
            attributes: { label: 'August 19, 2022' },
          },
        },
        {
          'im:name': { label: '& - EP' },
          'im:image': [
            {
              label:
                'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/88/ba/eb/88baebfa-1338-f4c4-e9ab-a86877a2b763/20UMGIM88356.rgb.jpg/55x55bb.png',
              attributes: { height: '55' },
            },
            {
              label:
                'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/88/ba/eb/88baebfa-1338-f4c4-e9ab-a86877a2b763/20UMGIM88356.rgb.jpg/60x60bb.png',
              attributes: { height: '60' },
            },
            {
              label:
                'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/88/ba/eb/88baebfa-1338-f4c4-e9ab-a86877a2b763/20UMGIM88356.rgb.jpg/170x170bb.png',
              attributes: { height: '170' },
            },
          ],
          'im:itemCount': { label: '6' },
          'im:price': {
            label: '$6.99',
            attributes: { amount: '6.99', currency: 'USD' },
          },
          'im:contentType': {
            'im:contentType': { attributes: { term: 'Album', label: 'Album' } },
            attributes: { term: 'Music', label: 'Music' },
          },
          rights: {
            label:
              'An EMI Records Nashville Release; ℗ 2022 BigEC Records LLC, under exclusive license to UMG Recordings, Inc.',
          },
          title: { label: '& - EP - Eric Church' },
          link: {
            attributes: {
              rel: 'alternate',
              type: 'text/html',
              href: 'https://music.apple.com/us/album/ep/1619175125?uo=2',
            },
          },
          id: {
            label: 'https://music.apple.com/us/album/ep/1619175125?uo=2',
            attributes: { 'im:id': '1619175125' },
          },
          'im:artist': {
            label: 'Eric Church',
            attributes: {
              href: 'https://music.apple.com/us/artist/eric-church/123055194?uo=2',
            },
          },
          category: {
            attributes: {
              'im:id': '6',
              term: 'Country',
              scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
              label: 'Country',
            },
          },
          'im:releaseDate': {
            label: '2022-08-19T00:00:00-07:00',
            attributes: { label: 'August 19, 2022' },
          },
        },
      ],
      updated: { label: '2022-08-23T08:01:59-07:00' },
      rights: { label: 'Copyright 2008 Apple Inc.' },
      title: { label: 'iTunes Store: Top Albums' },
      icon: { label: 'http://itunes.apple.com/favicon.ico' },
      link: [
        {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=1&popId=11',
          },
        },
        {
          attributes: {
            rel: 'self',
            href: 'https://mzstoreservices-int.dslb.apple.com/us/rss/topalbums/limit=4/json',
          },
        },
      ],
      id: {
        label:
          'https://mzstoreservices-int.dslb.apple.com/us/rss/topalbums/limit=4/json',
      },
    },
  };
};

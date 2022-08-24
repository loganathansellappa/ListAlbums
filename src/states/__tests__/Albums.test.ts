import 'whatwg-fetch';
import reducer, { add, remove, initialState } from '../Albums';
import { mockResource } from '../../utils/tests';

describe('Albums Slice', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  test('should handle add', () => {
    const previousState = initialState;
    expect(reducer(previousState, add(mockResource().feed.entry[0]))).toEqual({
      ...initialState,
      favourites: [mockResource().feed.entry[0]],
    });
  });

  test('should handle remove', () => {
    const previousState = initialState;
    expect(
      reducer(previousState, remove(mockResource().feed.entry[0].id.label))
    ).toEqual({
      ...initialState,
      favourites: [],
    });
  });
});

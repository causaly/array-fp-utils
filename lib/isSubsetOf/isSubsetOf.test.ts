import { pipe } from 'fp-ts/lib/function';

import { isSubsetOf } from './isSubsetOf';

const mockData = ['a', 'b', 'c', 'd', 'e'];

describe('isSubsetOf()', () => {
  it('returns true when the specified array is a subset of the other array', () => {
    const expected = pipe(['a', 'b', 'c'], isSubsetOf(mockData));
    expect(expected).toEqual(true);
  });

  it('returns true when the specified array is equal to the other array', () => {
    const expected = pipe(mockData, isSubsetOf(mockData));
    expect(expected).toEqual(true);
  });

  it('returns true when the specified array is empty', () => {
    const expected = pipe([], isSubsetOf(mockData));
    expect(expected).toEqual(true);
  });

  it('returns false when at least 1 item from the specified array is missing from the other array', () => {
    const expected = pipe(['a', 'b', 'f'], isSubsetOf(mockData));
    expect(expected).toEqual(false);
  });
});

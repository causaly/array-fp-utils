import { pipe } from 'fp-ts/lib/function';

import { isEqualSet } from './isEqualSet';

describe('isEqualSet()', () => {
  it('returns true when the specified array is a exactly the same as the other array', () => {
    const expected = pipe(['a', 'b', 'c'], isEqualSet(['a', 'b', 'c']));
    expect(expected).toEqual(true);
  });

  it('ignores duplicate values', () => {
    const expected = pipe(
      ['a', 'a', 'b', 'c'],
      isEqualSet(['a', 'b', 'b', 'c', 'c', 'c'])
    );
    expect(expected).toEqual(true);
  });

  it('ignores sorting', () => {
    const expected = pipe(['a', 'b', 'c'], isEqualSet(['b', 'c', 'a']));
    expect(expected).toEqual(true);
  });

  it('returns false when the specified array is different from the other array', () => {
    const expected = pipe(['a', 'b', 'c'], isEqualSet(['a', 'b', 'd']));
    expect(expected).toEqual(false);
  });

  it('returns false when the specified array is a subset of the other array', () => {
    const expected = pipe(['a', 'b'], isEqualSet(['a', 'b', 'c']));
    expect(expected).toEqual(false);
  });
});

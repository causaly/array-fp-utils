import { pipe } from 'fp-ts/lib/function';

import { isDistinctArray } from './isDistinctArray';

describe('isDistinctArray()', () => {
  it('returns true when array contains distinct values', () => {
    const expected = pipe([1, 2, 3], isDistinctArray);
    expect(expected).toBe(true);
  });

  it('returns false when array contains duplicate values', () => {
    const expected = pipe([1, 1, 2, 3], isDistinctArray);
    expect(expected).toBe(false);
  });
});

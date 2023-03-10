import { pipe } from 'fp-ts/lib/function';

import { isSameValueSet } from './isSameValueSet';

describe('isSameValueSet()', () => {
  it('returns true when the specified array is a exactly the same as the other array', () => {
    const expected = pipe(['a', 'b', 'c'], isSameValueSet(['a', 'b', 'c']));
    expect(expected).toEqual(true);
  });

  it('ignores sorting', () => {
    const expected = pipe(['a', 'b', 'c'], isSameValueSet(['b', 'c', 'a']));
    expect(expected).toEqual(true);
  });

  it('returns false on duplicate values', () => {
    const expected = pipe(
      ['a', 'b', 'c'],
      isSameValueSet(['a', 'b', 'c', 'c'])
    );
    expect(expected).toEqual(false);
  });

  it('returns false when the specified array is different from the other array', () => {
    const expected = pipe(['a', 'b', 'c'], isSameValueSet(['a', 'b', 'd']));
    expect(expected).toEqual(false);
  });

  it('returns false when the specified array is a subset of the other array', () => {
    const expected = pipe(['a', 'b'], isSameValueSet(['a', 'b', 'c']));
    expect(expected).toEqual(false);
  });
});

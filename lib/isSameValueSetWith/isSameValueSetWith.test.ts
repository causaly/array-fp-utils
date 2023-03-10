import { pipe } from 'fp-ts/lib/function';

import { isSameValueSetWith } from './isSameValueSetWith';

describe('isSameValueSetWith()', () => {
  it('returns true when the specified array is a exactly the same as the other array', () => {
    const expected = pipe(
      [{ key: 'a' }, { key: 'b' }, { key: 'c' }],
      isSameValueSetWith(
        ['a', 'b', 'c'],
        (value, otherValue) => value.key === otherValue
      )
    );
    expect(expected).toEqual(true);
  });

  it('ignores sorting', () => {
    const expected = pipe(
      [{ key: 'a' }, { key: 'b' }, { key: 'c' }],
      isSameValueSetWith(
        ['c', 'b', 'a'],
        (value, otherValue) => value.key === otherValue
      )
    );
    expect(expected).toEqual(true);
  });

  it('returns false on duplicate values', () => {
    const expected = pipe(
      [{ key: 'a' }, { key: 'b' }, { key: 'c' }],
      isSameValueSetWith(
        ['c', 'b', 'a', 'a'],
        (value, otherValue) => value.key === otherValue
      )
    );
    expect(expected).toEqual(false);
  });

  it('returns false when the specified array is different from the other array', () => {
    const expected = pipe(
      [{ key: 'a' }, { key: 'b' }, { key: 'c' }],
      isSameValueSetWith(
        ['a', 'b', 'd'],
        (value, otherValue) => value.key === otherValue
      )
    );
    expect(expected).toEqual(false);
  });

  it('returns false when the specified array is a subset of the other array', () => {
    const expected = pipe(
      [{ key: 'a' }, { key: 'b' }],
      isSameValueSetWith(
        ['a', 'b', 'c'],
        (value, otherValue) => value.key === otherValue
      )
    );
    expect(expected).toEqual(false);
  });
});

import { pipe } from 'fp-ts/lib/function';

import { isSubsetOfWith } from './isSubsetOfWith';

const mockData = [
  { foo: 'a' },
  { foo: 'b' },
  { foo: 'c' },
  { foo: 'd' },
  { foo: 'e' },
];

describe('isSubsetOfWith()', () => {
  it('returns true when the specified array is a subset of the other array', () => {
    const expected = pipe(
      ['a', 'b', 'c'],
      isSubsetOfWith(mockData, (item, otherItem) => item === otherItem.foo)
    );
    expect(expected).toEqual(true);
  });

  it('returns true when the specified array is equal to the other array', () => {
    const expected = pipe(
      mockData,
      isSubsetOfWith(mockData, (item, otherItem) => item.foo === otherItem.foo)
    );
    expect(expected).toEqual(true);
  });

  it('returns true when the specified array is empty', () => {
    const expected = pipe(
      [],
      isSubsetOfWith(mockData, (item, otherItem) => item === otherItem.foo)
    );
    expect(expected).toEqual(true);
  });

  it('returns false when at least 1 item from the specified array is missing from the other array', () => {
    const expected = pipe(
      ['a', 'b', 'f'],
      isSubsetOfWith(mockData, (item, otherItem) => item === otherItem.foo)
    );
    expect(expected).toEqual(false);
  });
});

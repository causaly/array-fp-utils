import { identity, pipe } from 'fp-ts/lib/function';

import { intersectWith } from './intersectWith';

const mockData = [
  { foo: 'a' },
  { foo: 'b' },
  { foo: 'c' },
  { foo: 'd' },
  { foo: 'e' },
];

describe('intersectWith()', () => {
  it('returns the intersection of two arrays', () => {
    pipe(
      mockData,
      intersectWith(
        ['b', 'c', 'f'],
        (item, otherItem) => item.foo === otherItem
      ),
      (output) => expect(output).toEqual([{ foo: 'b' }, { foo: 'c' }])
    );
  });

  it('returns empty array when at least one of the input arrays is empty', () => {
    pipe(
      mockData,
      intersectWith([], (item, otherItem) => item.foo === otherItem),
      (output) => expect(output).toEqual([])
    );

    pipe(
      [],
      intersectWith(mockData, (item, otherItem) => item === otherItem.foo),
      (output) => expect(output).toEqual([])
    );

    pipe(
      [],
      intersectWith([], (item, otherItem) => item === otherItem),
      (output) => expect(output).toEqual([])
    );
  });

  it('maintains the order of the first array', () => {
    pipe(
      mockData,
      intersectWith(['b', 'a'], (item, otherItem) => item.foo === otherItem),
      (output) => expect(output).toEqual([{ foo: 'a' }, { foo: 'b' }])
    );
  });

  it('does not remove duplicate values from the first array', () => {
    pipe(
      [...mockData, { foo: 'a' }, { foo: 'a' }],
      intersectWith(['b', 'a'], (item, otherItem) => item.foo === otherItem),
      (output) =>
        expect(output).toEqual([
          { foo: 'a' },
          { foo: 'b' },
          { foo: 'a' },
          { foo: 'a' },
        ])
    );
  });

  it('handles duplicate values in the second array', () => {
    pipe(
      mockData,
      intersectWith(
        ['b', 'b', 'a', 'a'],
        (item, otherItem) => item.foo === otherItem
      ),
      (output) => expect(output).toEqual([{ foo: 'a' }, { foo: 'b' }])
    );
  });
});

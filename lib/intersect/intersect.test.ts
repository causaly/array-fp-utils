import { pipe } from 'fp-ts/lib/function';

import { intersect } from './intersect';

const mockData = ['a', 'b', 'c', 'd', 'e'];

describe('intersect()', () => {
  it('returns the intersection of two arrays', () => {
    const expected = pipe(mockData, intersect(['b', 'c', 'f']));
    expect(expected).toEqual(['b', 'c']);
  });

  it('returns empty array when at least one of the input arrays is empty', () => {
    expect(pipe(mockData, intersect([]))).toEqual([]);
    expect(pipe([], intersect(mockData))).toEqual([]);
    expect(pipe([], intersect([]))).toEqual([]);
  });

  it('maintains the order of the first array', () => {
    expect(pipe(mockData, intersect(['b', 'a']))).toEqual(['a', 'b']);
  });

  it('does not remove duplicate values from the first array', () => {
    expect(pipe([...mockData, 'a', 'a'], intersect(['b', 'a']))).toEqual([
      'a',
      'b',
      'a',
      'a',
    ]);
  });

  it('handles duplicate values in the second array', () => {
    expect(pipe(mockData, intersect(['b', 'b', 'a', 'a']))).toEqual(['a', 'b']);
  });

  it("accepts different array types although it doesn't make sense", () => {
    expect(pipe(mockData, intersect([1, 2, 3]))).toEqual([]);
  });
});

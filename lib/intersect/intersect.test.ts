import { intersect } from './intersect';

const mockData = ['a', 'b', 'c', 'd', 'e'];

describe('intersect()', () => {
  it('returns the intersection of two arrays', () => {
    const expected = intersect(mockData, ['b', 'c', 'f']);
    expect(expected).toEqual(['b', 'c']);
  });

  it('returns empty array when at least one of the input arrays is empty', () => {
    expect(intersect(mockData, [])).toEqual([]);
    expect(intersect([], mockData)).toEqual([]);
    expect(intersect([], [])).toEqual([]);
  });

  it('maintains the order of the first array', () => {
    expect(intersect(mockData, ['b', 'a'])).toEqual(['a', 'b']);
  });

  it('does not remove duplicate values from the first array', () => {
    expect(intersect([...mockData, 'a', 'a'], ['b', 'a'])).toEqual([
      'a',
      'b',
      'a',
      'a',
    ]);
  });

  it('handles duplicate values in the second array', () => {
    expect(intersect(mockData, ['b', 'b', 'a', 'a'])).toEqual(['a', 'b']);
  });
});

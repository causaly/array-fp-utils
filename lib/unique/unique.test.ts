import { pipe } from 'fp-ts/lib/function';
import { expectType } from 'ts-expect';

import { NonEmptyArray, NonEmptyArrayAlt } from '../types';
import { unique } from './unique';

describe('unique()', () => {
  it('returns unique values', () => {
    const mockData = [
      'Greece',
      'Greece',
      'Greece',
      'United States',
      'United Kingdom',
      'United States',
      'Greece',
      'Greece',
      'United States',
      'United States',
    ];

    const expected = unique(mockData);
    expectType<Array<string>>(expected);

    expect(expected).toMatchInlineSnapshot(`
      [
        "Greece",
        "United States",
        "United Kingdom",
      ]
    `);
  });

  it('accepts NonEmptyArray', () => {
    const mockData: NonEmptyArray<number> = [1, 2, 2, 3, 3, 3];

    const expected = unique(mockData);
    expectType<NonEmptyArray<number>>(expected);

    expect(expected).toEqual([1, 2, 3]);
  });

  it('accepts NonEmptyArrayAlt', () => {
    const mockData: NonEmptyArrayAlt<number> = [1, 2, 2, 3, 3, 3];

    const expected = unique(mockData);
    expectType<NonEmptyArrayAlt<number>>(expected);

    expect(expected).toEqual([1, 2, 3]);
  });

  it('works successfully with fp-ts pipe', () => {
    type Value = 'a' | 'b' | 'c';
    const mockData: NonEmptyArray<Value> = ['a', 'b', 'b', 'c', 'c', 'c'];

    const expected = pipe(mockData, unique);
    expectType<NonEmptyArray<Value>>(expected);

    expect(expected).toEqual(['a', 'b', 'c']);
  });
});

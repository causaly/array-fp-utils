import { identity, pipe } from 'fp-ts/lib/function';
import { expectType } from 'ts-expect';

import { NonEmptyArray, NonEmptyArrayAlt } from '../types';
import { uniqueBy } from './uniqueBy';

const mockData = [
  {
    id: 1,
    company: 'Flashset',
    country: 'Greece',
    revenue: 48401958,
  },
  {
    id: 2,
    company: 'Skipstorm',
    country: 'Greece',
    revenue: 39881017,
  },
  {
    id: 3,
    company: 'Aibox',
    country: 'Greece',
    revenue: 36688012,
  },
  {
    id: 4,
    company: 'Tagtune',
    country: 'United States',
    revenue: 64066240,
  },
  {
    id: 5,
    company: 'Dynava',
    country: 'United Kingdom',
    revenue: 42858525,
  },
  {
    id: 6,
    company: 'Skiptube',
    country: 'United States',
    revenue: 96607222,
  },
  {
    id: 7,
    company: 'Mynte',
    country: 'Greece',
    revenue: 48604802,
  },
  {
    id: 8,
    company: 'Voolia',
    country: 'Greece',
    revenue: 50541051,
  },
  {
    id: 9,
    company: 'Skiba',
    country: 'United States',
    revenue: 17141494,
  },
  {
    id: 10,
    company: 'Digitube',
    country: 'United States',
    revenue: 3396046,
  },
];

describe('uniqueBy()', () => {
  it('returns unique values by key, dropping duplicate values', () => {
    const expected = pipe(
      mockData,
      uniqueBy((item) => item.country)
    );

    expect(expected).toMatchInlineSnapshot(`
      [
        {
          "company": "Flashset",
          "country": "Greece",
          "id": 1,
          "revenue": 48401958,
        },
        {
          "company": "Tagtune",
          "country": "United States",
          "id": 4,
          "revenue": 64066240,
        },
        {
          "company": "Dynava",
          "country": "United Kingdom",
          "id": 5,
          "revenue": 42858525,
        },
      ]
    `);
  });

  it('accepts optional reduce function to merge data', () => {
    const expected = pipe(
      mockData,
      uniqueBy(
        (item) => item.country,
        (prevItem, nextItem) => {
          return {
            ...prevItem,
            revenue: prevItem.revenue + nextItem.revenue,
          };
        }
      )
    );

    expect(expected).toMatchInlineSnapshot(`
      [
        {
          "company": "Flashset",
          "country": "Greece",
          "id": 1,
          "revenue": 224116840,
        },
        {
          "company": "Tagtune",
          "country": "United States",
          "id": 4,
          "revenue": 181211002,
        },
        {
          "company": "Dynava",
          "country": "United Kingdom",
          "id": 5,
          "revenue": 42858525,
        },
      ]
    `);
  });

  it('accepts empty array as input', () => {
    const expected = pipe([], uniqueBy(identity));

    expectType<Array<never>>(expected);
    expect(expected).toEqual([]);
  });

  it('accepts NonEmptyArray as input', () => {
    type T = NonEmptyArray<typeof mockData[number]>;

    const expected = pipe(
      mockData as T,
      uniqueBy((item) => item.country)
    );

    expectType<T>(expected);

    expect(expected).toMatchInlineSnapshot(`
      [
        {
          "company": "Flashset",
          "country": "Greece",
          "id": 1,
          "revenue": 48401958,
        },
        {
          "company": "Tagtune",
          "country": "United States",
          "id": 4,
          "revenue": 64066240,
        },
        {
          "company": "Dynava",
          "country": "United Kingdom",
          "id": 5,
          "revenue": 42858525,
        },
      ]
    `);
  });

  it('accepts NonEmptyArrayAlt as input', () => {
    type T = NonEmptyArrayAlt<typeof mockData[number]>;

    const expected = pipe(
      mockData as T,
      uniqueBy((item) => item.country)
    );

    expectType<T>(expected);

    expect(expected).toMatchInlineSnapshot(`
      [
        {
          "company": "Flashset",
          "country": "Greece",
          "id": 1,
          "revenue": 48401958,
        },
        {
          "company": "Tagtune",
          "country": "United States",
          "id": 4,
          "revenue": 64066240,
        },
        {
          "company": "Dynava",
          "country": "United Kingdom",
          "id": 5,
          "revenue": 42858525,
        },
      ]
    `);
  });
});

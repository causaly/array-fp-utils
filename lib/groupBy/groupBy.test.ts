import { pipe } from 'fp-ts/lib/function';

import { groupBy } from './groupBy';

describe('groupBy()', () => {
  it('respects input order in contrast to stupid lodash and fp-ts groupBy', () => {
    const input = [
      {
        key: 2,
        score: 2,
      },
      {
        key: 1,
        score: 0.5,
      },
      {
        key: 1,
        score: 1,
      },
    ];

    const expected = pipe(
      input,
      groupBy((item) => item.key)
    );

    expect(expected).toMatchInlineSnapshot(`
      [
        [
          {
            "key": 2,
            "score": 2,
          },
        ],
        [
          {
            "key": 1,
            "score": 0.5,
          },
          {
            "key": 1,
            "score": 1,
          },
        ],
      ]
    `);
  });

  it('accepts empty array as input', () => {
    const expected = pipe(
      [],
      groupBy((item) => item)
    );

    expect(expected).toEqual([]);
  });
});

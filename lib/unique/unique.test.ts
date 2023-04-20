import { unique } from './unique';

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

describe('unique()', () => {
  it('returns unique values', () => {
    const expected = unique(mockData);

    expect(expected).toMatchInlineSnapshot(`
      [
        "Greece",
        "United States",
        "United Kingdom",
      ]
    `);
  });
});

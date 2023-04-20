# array-fp-utils

Array utilities for functional programming in TypeScript.

[![Build Status](https://github.com/causaly/array-fp-utils/actions/workflows/ci.yml/badge.svg)](https://github.com/causaly/array-fp-utils/actions/workflows/ci.yml) [![npm version](https://img.shields.io/npm/v/array-fp-utils.svg?color=0c0)](https://www.npmjs.com/package/array-fp-utils)

#### Features

- Battle tested performance;
- Meant to be used with a proper FP library, such as [fp-ts](https://gcanti.github.io/fp-ts/);
- Extensive tests.

## Installation

```bash
npm install array-fp-utils
```

#### Requirements

- Node.js v.16+

## API

- [groupBy](#groupby)
- [intersect](#intersect)
- [intersectWith](#intersectwith)
- [isDistinctArray](#isdistinctarray)
- [isSameValueSet](#issamevalueset)
- [isSameValueSetWith](#issamevaluesewith)
- [isSubsetOf](#issubsetof)
- [isSubsetOfWith](#issubsetofwith)
- [unique](#unique)
- [uniqueBy](#uniqueby)

### groupBy

```typescript
import { pipe } from 'fp-ts/lib/function';
import { groupBy } from 'array-fp-utils';

const arr = [
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

// group by key, while maintaining array item order
const groupedArr = pipe(
  arr,
  groupBy((item) => item.key)
);

// groupedArr now contains the following
// [
//   [
//     {
//       "key": 2,
//       "score": 2,
//     },
//   ],
//   [
//     {
//       "key": 1,
//       "score": 0.5,
//     },
//     {
//       "key": 1,
//       "score": 1,
//     },
//   ],
// ]
```

### intersect

```typescript
import { pipe } from 'fp-ts/lib/function';
import { intersect } from 'array-fp-utils';

const arr = ['a', 'b', 'c', 'd', 'e'];
const otherArr = ['b', 'c', 'f'];

// calculates the intersection of two arrays
const intersection = pipe(arr, intersect(otherArr)); // returns ['b', 'c']
```

### intersectWith

```typescript
import { pipe } from 'fp-ts/lib/function';
import { intersectWith } from 'array-fp-utils';

const arr = [
  { foo: 'a' },
  { foo: 'b' },
  { foo: 'c' },
  { foo: 'd' },
  { foo: 'e' },
];

const otherArr = [{ bar: 'b' }, { bar: 'c' }, { bar: 'f' }];

// calculate the intersection of two arrays using comparator function
const arr = pipe(
  mockData,
  intersectWith(otherArr, (item, otherItem) => item.foo === otherItem.bar)
);

// arr = [{ foo: 'b' }, { foo: 'c' }]
```

### isDistinctArray

```typescript
import { pipe } from 'fp-ts/lib/function';
import { isDistinctArray } from 'array-fp-utils';

pipe([1, 2, 3], isDistinctArray); // returns true
pipe([1, 1, 2, 3], isDistinctArray); // returns false
```

### isSameValueSet

Indicates whether an array contains the same set of items with another array, irrelevant of position (sorting).

Note: only accepts arrays of [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) values.

#### Example

```typescript
import { pipe } from 'fp-ts/lib/function';
import { isSameValueSet } from 'array-fp-utils';

pipe([1, 2, 3], isSameValueSet([3, 2, 1])); // returns true

pipe([1, 2], isSameValueSet([1, 2, 3])); // returns false
pipe([1, 2, 3], isSameValueSet([1, 2, 4])); // returns false
```

### isSameValueSetWith

Indicates whether an array contains the same set of items with another array, irrelevant of position (sorting), using a comparator function.

#### Example

```typescript
import { pipe } from 'fp-ts/lib/function';
import { isSameValueSetWith } from 'array-fp-utils';

pipe(
  [{ key: 1 }, { key: 2 }, { key: 3 }],
  isSameValueSetWith([3, 2, 1], (value, otherValue) => value.key === otherValue)
); // returns true
```

### isSubsetOf

```typescript
import { pipe } from 'fp-ts/lib/function';
import { isSubsetOf } from 'array-fp-utils';

const arr = ['a', 'b', 'c', 'd'];

const isSubset = pipe(['b', 'd'], isSubsetOf(arr)); // returns true
const isSubset = pipe(['a', 'e'], isSubsetOf(arr)); // returns false
```

### isSubsetOfWith

```typescript
import { pipe } from 'fp-ts/lib/function';
import { isSubsetOfWith } from 'array-fp-utils';

const arr = [
  { foo: 'a' },
  { foo: 'b' },
  { foo: 'c' },
  { foo: 'd' },
  { foo: 'e' },
];
const otherArr = [{ bar: 'b' }, { bar: 'c' }, { bar: 'f' }];

const isSubset = pipe(
  arr,
  isSubsetOfWith(otherArr, (item, otherItem) => item.foo === otherItem.bar)
); // returns false since "f" does not exist in arr
```

### unique

```typescript
import { pipe } from 'fp-ts/lib/function';
import { unique } from 'array-fp-utils';

const countries = [
  'Greece',
  'Greece',
  'Greece',
  'United States',
  'United Kingdom'
  'United States',
];

// returns ['Greece', 'United Kingdom', 'United State']
const uniqueArray = pipe(countries, unique);
```

### uniqueBy

```typescript
import { pipe } from 'fp-ts/lib/function';
import { uniqueBy } from 'array-fp-utils';

const users = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Michael'
  }
  {
    id: 3,
    name: 'Michael'
  }
]

// removes duplicate values from array in FiFo
// returns [{id:1, name: 'John'}, {id:2, name: 'Michael'}]
const uniqueArray = pipe(
  users,
  uniqueBy((user) => user.name)
)

```

## Motivation

This library is a collection of array utils, written with FP principles. They focus on performance instead of compatibility.

The alternative would be to use a library like `lodash`. However, `lodash` in an attempt to be backwards compatible with older browsers, falls behind on performance. In addition, `lodash/groupBy` changes the initial order of the array items.

## Contribute

Source code contributions are most welcome. Please open a PR, ensure the linter is satisfied and all tests pass.

#### We are hiring

Causaly is building the world's largest biomedical knowledge platform, using technologies such as TypeScript, React and Node.js. Find out more about our openings at https://apply.workable.com/causaly/.

## License

MIT

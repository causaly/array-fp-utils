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

- Node.js v.14+

## Quick start

```typescript
import { pipe } from 'fp-ts/lib/function';

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

## API

- `groupBy`
- `intersect`
- `intersectWith`
- `isDistinctArray`
- `isSubsetOf`
- `isSubsetOfWith`
- `unique`
- `uniqueBy`

## Motivation

This library is a collection of array utils, written with FP principles. They focus on performance instead of compatibility.

The alternative would be to use a library like `lodash`. However, `lodash` in an attempt to be backwards compatible with older browsers, falls behind on performance. In addition, `lodash/groupBy` changes the initial order of the array items.

## Contribute

Source code contributions are most welcome. Please open a PR, ensure the linter is satisfied and all tests pass.

#### We are hiring

Causaly is building the world's largest biomedical knowledge platform, using technologies such as TypeScript, React and Node.js. Find out more about our openings at https://apply.workable.com/causaly/.

## License

MIT

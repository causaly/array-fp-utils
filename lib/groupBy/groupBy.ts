import { NonEmptyArray } from '../types';

export const groupBy =
  <ValueType, KeyType>(getKey: (value: ValueType) => KeyType) =>
  (arr: Array<ValueType>): Array<NonEmptyArray<ValueType>> => {
    const map = arr.reduce((acc, value) => {
      const key = getKey(value);
      const group = acc.get(key);

      if (!group) {
        acc.set(key, [value]);
      } else {
        group.push(value);
      }

      return acc;
    }, new Map<KeyType, NonEmptyArray<ValueType>>());

    return Array.from(map.values());
  };

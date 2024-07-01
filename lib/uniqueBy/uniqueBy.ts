import { NonEmptyArray, NonEmptyArrayAlt } from '../types';

export function _uniqueBy<
  T extends
    | ReadonlyArray<unknown>
    | Readonly<NonEmptyArray<unknown>>
    | Readonly<NonEmptyArrayAlt<unknown>>,
  K
>(
  arr: T,
  getUniqueKey: (value: T[number]) => K,
  reduceValue: (prevValue: T[number], nextValue: T[number]) => T[number] = (
    prevValue
  ) => prevValue
): T {
  const map = new Map<K, T[number]>();

  for (const value of arr) {
    const key = getUniqueKey(value);
    const existingValue = map.get(key);

    if (!existingValue) {
      map.set(key, value);
    } else {
      map.set(key, reduceValue(existingValue, value));
    }
  }

  return Array.from(map.values()) as T;
}

export const uniqueBy =
  <
    T extends
      | ReadonlyArray<unknown>
      | Readonly<NonEmptyArray<unknown>>
      | Readonly<NonEmptyArrayAlt<unknown>>,
    K
  >(
    getUniqueKey: (value: T[number]) => K,
    reduceValue: (prevValue: T[number], nextValue: T[number]) => T[number] = (
      prevValue
    ) => prevValue
  ) =>
  (arr: T): T =>
    _uniqueBy(arr, getUniqueKey, reduceValue);

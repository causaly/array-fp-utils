export const uniqueBy =
  <ValueType, KeyType>(
    getUniqueKey: (value: ValueType) => KeyType,
    reduceValue: (prevValue: ValueType, nextValue: ValueType) => ValueType = (
      prevValue
    ) => prevValue
  ) =>
  (arr: Array<ValueType>): Array<ValueType> => {
    const map = arr.reduce((acc, value) => {
      const key = getUniqueKey(value);
      const existingValue = acc.get(key);

      if (!existingValue) {
        acc.set(key, value);
      } else {
        acc.set(key, reduceValue(existingValue, value));
      }

      return acc;
    }, new Map<KeyType, ValueType>());

    return Array.from(map.values());
  };

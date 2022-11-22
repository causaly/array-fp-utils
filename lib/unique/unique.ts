export const unique = <ValueType>(
  arr: Readonly<Array<ValueType>>
): Array<ValueType> => {
  return Array.from(new Set(arr));
};

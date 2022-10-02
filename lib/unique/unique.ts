export const unique = <ValueType>(arr: Array<ValueType>): Array<ValueType> => {
  return Array.from(new Set(arr));
};

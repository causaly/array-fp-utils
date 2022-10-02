export const isSubsetOf =
  <ValueType>(otherArr: Array<ValueType>) =>
  (arr: Array<ValueType>): boolean => {
    const set = new Set(otherArr);
    return arr.every((item) => set.has(item));
  };

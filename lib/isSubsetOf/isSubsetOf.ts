export const isSubsetOf =
  <ValueType>(otherArr: Readonly<Array<ValueType>>) =>
  (arr: Readonly<Array<ValueType>>): boolean => {
    const set = new Set(otherArr);
    return arr.every((item) => set.has(item));
  };

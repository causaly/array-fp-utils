export const intersect =
  (otherArr: Array<unknown>) =>
  <ValueType>(arr: Array<ValueType>): Array<ValueType> => {
    const set = new Set(otherArr);

    return arr.filter((item) => set.has(item));
  };

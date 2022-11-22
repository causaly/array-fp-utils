export const intersect =
  (otherArr: Readonly<Array<unknown>>) =>
  <ValueType>(arr: Readonly<Array<ValueType>>): Array<ValueType> => {
    const set = new Set(otherArr);

    return arr.filter((item) => set.has(item));
  };

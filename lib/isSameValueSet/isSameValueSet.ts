import { Primitive } from '../types';

export const isSameValueSet =
  (otherArr: Readonly<Array<Primitive>>) =>
  (arr: Readonly<Array<Primitive>>): boolean => {
    if (arr.length !== otherArr.length) {
      return false;
    }

    const set = new Set(arr);
    const otherSet = new Set(otherArr);

    return [...set.values()].every((item) => otherSet.has(item));
  };

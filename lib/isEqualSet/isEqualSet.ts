import { Primitive } from '../types';

export const isEqualSet =
  (otherArr: Readonly<Array<Primitive>>) =>
  (arr: Readonly<Array<Primitive>>): boolean => {
    const set = new Set(arr);
    const otherSet = new Set(otherArr);

    return (
      set.size === otherSet.size &&
      [...set.values()].every((item) => otherSet.has(item))
    );
  };

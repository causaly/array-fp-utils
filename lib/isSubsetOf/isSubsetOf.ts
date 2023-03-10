import { Primitive } from '../types';

export const isSubsetOf =
  (otherArr: Readonly<Array<Primitive>>) =>
  (arr: Readonly<Array<Primitive>>): boolean => {
    const set = new Set(otherArr);
    return arr.every((item) => set.has(item));
  };

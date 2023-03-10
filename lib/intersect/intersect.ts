import { Primitive } from '../types';

export const intersect =
  (otherArr: Readonly<Array<Primitive>>) =>
  (arr: Readonly<Array<Primitive>>): Array<Primitive> => {
    const set = new Set(otherArr);

    return arr.filter((item) => set.has(item));
  };

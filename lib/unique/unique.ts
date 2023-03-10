import { Primitive } from '../types';

export const unique = (arr: Readonly<Array<Primitive>>): Array<Primitive> => {
  return Array.from(new Set(arr));
};

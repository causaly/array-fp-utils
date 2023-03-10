import { Primitive } from '../types';

export function isDistinctArray(arr: Readonly<Array<Primitive>>): boolean {
  const set = new Set(arr);
  return arr.length === set.size;
}

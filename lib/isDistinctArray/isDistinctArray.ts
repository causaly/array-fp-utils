import { Primitive } from '../types';

export function isDistinctArray(arr: ReadonlyArray<Primitive>): boolean {
  const set = new Set(arr);
  return arr.length === set.size;
}

import { NonEmptyArray, NonEmptyArrayAlt, Primitive } from '../types';

export function unique<
  T extends
    | ReadonlyArray<Primitive>
    | Readonly<NonEmptyArray<Primitive>>
    | Readonly<NonEmptyArrayAlt<Primitive>>
>(arr: T): T {
  return Array.from(new Set(arr)) as T;
}

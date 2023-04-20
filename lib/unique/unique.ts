import { NonEmptyArray, NonEmptyArrayAlt, Primitive } from '../types';

export function unique<ValueType extends Primitive>(
  arr: Readonly<NonEmptyArray<ValueType>>
): NonEmptyArray<ValueType>;

export function unique<ValueType extends Primitive>(
  arr: Readonly<NonEmptyArrayAlt<ValueType>>
): NonEmptyArrayAlt<ValueType>;

export function unique<ValueType extends Primitive>(
  arr: Readonly<Array<ValueType>>
): Array<ValueType>;

export function unique<ValueType extends Primitive>(
  arr: Readonly<Array<ValueType>>
) {
  return Array.from(new Set(arr));
}

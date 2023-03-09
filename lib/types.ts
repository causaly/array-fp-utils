export type NonEmptyArray<T> = [T, ...T[]];

export type Primitive =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | null
  | undefined;

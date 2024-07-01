export type NonEmptyArray<T> = [T, ...T[]];

export type NonEmptyArrayAlt<T> = Array<T> & {
  0: T;
};

export type Primitive =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | null
  | undefined;

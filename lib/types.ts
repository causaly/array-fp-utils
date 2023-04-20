export type NonEmptyArray<T> = [T, ...T[]];

export type NonEmptyArrayAlt<A> = Array<A> & {
  0: A;
};

export type Primitive =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | null
  | undefined;

export function isDistinctArray<ValueType>(
  arr: Readonly<Array<ValueType>>
): boolean {
  const set = new Set(arr);
  return arr.length === set.size;
}

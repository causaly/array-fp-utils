export function isDistinctArray<ValueType>(arr: Array<ValueType>): boolean {
  const set = new Set(arr);
  return arr.length === set.size;
}

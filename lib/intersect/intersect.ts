export function intersect<ValueType>(
  arr: Array<ValueType>,
  otherArr: Array<ValueType>
): Array<ValueType> {
  const set = new Set(otherArr);

  return arr.filter((item) => set.has(item));
}

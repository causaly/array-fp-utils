export const isSubsetOfWith =
  <ValueType, OtherValueType>(
    otherArr: Array<OtherValueType> | Readonly<Array<OtherValueType>>,
    isEqual: (value: ValueType, otherValue: OtherValueType) => boolean
  ) =>
  (arr: Array<ValueType> | Readonly<Array<ValueType>>): boolean => {
    return arr.every((item) =>
      otherArr.some((otherItem) => isEqual(item, otherItem))
    );
  };

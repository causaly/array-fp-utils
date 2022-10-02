export const intersectWith =
  <ValueType, OtherValueType>(
    otherArr: Array<OtherValueType>,
    isEqual: (value: ValueType, otherValue: OtherValueType) => boolean
  ) =>
  (arr: Array<ValueType>): Array<ValueType> => {
    return arr.filter((item) =>
      otherArr.some((otherItem) => isEqual(item, otherItem))
    );
  };

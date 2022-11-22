export const intersectWith =
  <ValueType, OtherValueType>(
    otherArr: Readonly<Array<OtherValueType>>,
    isEqual: (value: ValueType, otherValue: OtherValueType) => boolean
  ) =>
  (arr: Readonly<Array<ValueType>>): Array<ValueType> => {
    return arr.filter((item) =>
      otherArr.some((otherItem) => isEqual(item, otherItem))
    );
  };

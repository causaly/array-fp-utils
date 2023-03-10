export const isSameValueSetBy =
  <ValueType, OtherValueType>(
    otherArr: Readonly<Array<OtherValueType>>,
    isEqual: (value: ValueType, otherValue: OtherValueType) => boolean
  ) =>
  (arr: Readonly<Array<ValueType>>): boolean => {
    if (arr.length !== otherArr.length) {
      return false;
    }

    const usedIndices = new Set<number>();

    return arr.every((item) => {
      for (let index = 0; index < otherArr.length; index++) {
        const otherItem = otherArr[index];

        if (usedIndices.has(index)) {
          continue;
        }

        if (isEqual(item, otherItem)) {
          usedIndices.add(index);
          return true;
        }
      }

      return false;
    });
  };

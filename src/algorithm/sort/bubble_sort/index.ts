function BubbleSort(array: any[]) {
  const tempArray = [...array];

  for (let i = 0; i < tempArray.length - 1; i++) {
    for (let j = 0; j < tempArray.length - i - 1; j++) {
      if (tempArray[j] > tempArray[j + 1]) {
        let temp = tempArray[j];
        tempArray[j] = tempArray[j + 1];
        tempArray[j + 1] = temp;
      }
    }
  }

  return tempArray;
}

export default BubbleSort;

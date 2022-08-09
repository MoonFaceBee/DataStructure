function selectionSort(array: any[]) {
  const tempArray = [...array];

  for (let i = 0; i < tempArray.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < tempArray.length; j++) {
      if (tempArray[j] < tempArray[minIndex]) {
        minIndex = j;
      }
    }

    const temp = tempArray[i];
    tempArray[i] = tempArray[minIndex];
    tempArray[minIndex] = temp;
  }

  return tempArray;
}

export function selectionSort2(array: any[]) {
  const tempArray = [...array];

  for (let i = 0; i < Math.floor(tempArray.length / 2); i++) {
    let minIndex = i;
    let maxIndex = i;
    const endIndex = tempArray.length - 1 - i;

    for (let j = i + 1; j < endIndex; j++) {
      if (tempArray[j] < tempArray[minIndex]) {
        minIndex = j;
      }

      if (tempArray[j] > tempArray[maxIndex]) {
        maxIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp1 = tempArray[i];
      tempArray[i] = tempArray[minIndex];
      tempArray[minIndex] = temp1;
    }

    if (maxIndex !== endIndex) {
      const temp2 = tempArray[endIndex];
      tempArray[endIndex] = tempArray[maxIndex];
      tempArray[maxIndex] = temp2;
    }
  }

  return tempArray;
}

export default selectionSort;

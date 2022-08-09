function insertionsSort(array: any[]) {
  const tempArray = [...array];

  for (let i = 1; i < tempArray.length; i++) {
    const key = tempArray[i];
    let inserted = false;

    for (let j = i - 1; j >= 0; j--) {
      if (key < tempArray[j]) {
        tempArray[j + 1] = tempArray[j];
      } else {
        tempArray[j + 1] = key;
        inserted = true;
      }
    }

    if (!inserted) {
      tempArray[0] = key;
    }
  }

  return tempArray;
}

export default insertionsSort;

function quickSortHelper(array: any[], low: number, high: number) {
  if (high <= low) {
    return;
  }

  let mid = array[Math.floor((low + high) / 2)];
  let i = low;
  let j = high;

  while (i < j) {
    if (array[i] >= mid && array[j] <= mid) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;

      i++;
      j--;
    } else {
      if (array[i] <= mid) {
        i++;
      }

      if (array[j] >= mid) {
        j--;
      }
    }
  }

  quickSortHelper(array, low, j);
  quickSortHelper(array, i, high);
}

function quickSort(array: any[]): any[] {
  const tempArray = [...array];
  quickSortHelper(tempArray, 0, array.length - 1);
  return tempArray;
}

export default quickSort;

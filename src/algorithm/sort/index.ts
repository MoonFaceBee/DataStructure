import SelectionSort, { SelectionSort2 } from "./selection_sort/index.ts";
import BubbleSort from "./bubble_sort/index.ts";
import InsertionSort from "./bubble_sort/index.ts";

const array = new Array(100000).fill(0).map(() =>
  Math.floor(Math.random() * 1000000)
);

console.time("Selection Sort");
SelectionSort(array);
console.timeEnd("Selection Sort");

console.time("Selection Sort 2");
SelectionSort2(array);
console.timeEnd("Selection Sort 2");

console.time("Bubble Sort");
BubbleSort(array);
console.timeEnd("Bubble Sort");

console.time("Insertion Sort");
InsertionSort(array);
console.timeEnd("Insertion Sort");

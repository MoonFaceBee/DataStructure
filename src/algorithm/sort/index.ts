import selectionSort, { selectionSort2 } from "./selection_sort/index.ts";
import bubbleSort from "./bubble_sort/index.ts";
import insertionSort from "./bubble_sort/index.ts";
import linearSearch from "../search/linear.ts";
import binarySearch from "../search/binary.ts";
import quickSort from "./quick_sort/index.ts";

const array = new Array(100000).fill(0).map(() =>
  Math.floor(Math.random() * 1000000)
);

console.time("Selection Sort");
selectionSort(array);
console.timeEnd("Selection Sort");

console.time("Selection Sort 2");
const sortedArray = selectionSort2(array);
console.timeEnd("Selection Sort 2");

console.time("Bubble Sort");
bubbleSort(array);
console.timeEnd("Bubble Sort");

console.time("Insertion Sort");
insertionSort(array);
console.timeEnd("Insertion Sort");

console.time("Quick Sort");
quickSort(array);
console.timeEnd("Quick Sort");

const randomKey = array[Math.floor(Math.random() * array.length)];
console.log(randomKey);

console.time("Linear Search");
console.log("linearSearch", linearSearch(array, randomKey));
console.timeEnd("Linear Search");

console.time("Binary Search");
console.log("binarySearch", binarySearch(sortedArray, randomKey));
console.timeEnd("Binary Search");

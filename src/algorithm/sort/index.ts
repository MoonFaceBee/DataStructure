import SelectionSort from "./algorithm/sort/selection_sort/index.ts";
import BubbleSort from "./algorithm/sort/bubble_sort/index.ts";

const array = new Array(100000).fill(0).map(() => Math.floor(Math.random * 1000000));

console.time('Selection Sort');
SelectionSort(array)
console.timeEnd('Selection Sort');

console.time('Bubble Sort');
BubbleSort(array)
console.timeEnd('Bubble Sort');
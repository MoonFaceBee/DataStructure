import bubbleSort from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import isSorted from "../../../utils/is_sorted.ts";

Deno.test("Bubble Sort", () => {
  const array = new Array(100).fill(0).map(() =>
    Math.floor(Math.random() * 1000)
  );
  const sortedArray = bubbleSort(array);

  assertEquals(isSorted(sortedArray), true);
});

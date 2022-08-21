import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import mergeSort from "./index.ts";
import isSorted from "../../../utils/is_sorted.ts";

Deno.test("Merge Sort", () => {
  const array = new Array(100).fill(0).map(() =>
    Math.floor(Math.random() * 10000)
  );
  const newArray = mergeSort(array);

  assertEquals(isSorted(newArray), true);
});

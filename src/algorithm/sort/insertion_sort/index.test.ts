import isSorted from "../../../utils/is_sorted.ts";
import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import InsertionsSort from "./index.ts";

Deno.test("Insertion Sort", () => {
  const array = new Array(1000).fill(0).map(() =>
    Math.floor(Math.random() * 10)
  );
  const sortedArray = InsertionsSort(array);

  assertEquals(isSorted(sortedArray), true);
});

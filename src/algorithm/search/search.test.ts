import linearSearch from "./linear.ts";
import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import binarySearch from "./binary.ts";

Deno.test("Linear Search", () => {
  const array = [1, 10, 8, 9, 3];

  assertEquals(linearSearch(array, 8), 2);
  assertEquals(linearSearch(array, 3), 4);
  assertEquals(linearSearch(array, 7), -1);
});

Deno.test("Binary Search", () => {
  const array = [1, 3, 8, 9, 10];

  assertEquals(binarySearch(array, 8), 2);
  assertEquals(binarySearch(array, 3), 1);
  assertEquals(binarySearch(array, 7), -1);
});

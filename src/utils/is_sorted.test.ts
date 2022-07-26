import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import isSorted from "./is_sorted.ts";

Deno.test('Is Sorted', () => {
	assertEquals(isSorted([1, 2, 6, 9, 10]), true)
	assertEquals(isSorted([8, 1, 1, 5, 7]), false)
	assertEquals(isSorted([1, 2, 3, 4, 1, 1, 9, 7]), false)
})

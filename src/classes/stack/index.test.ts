import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";

import Stack from "./index.ts";

Deno.test("Stack Push", () => {
  const s = new Stack<number>(3);

  s.push(1);
  s.push(2);
  s.push(3);

  assertEquals(s.peek(), 3);

  s.pop();

  assertEquals(s.peek(), 2);

  s.pop();
  s.pop();

  assertEquals(s.isEmpty, true);
});

Deno.test("Stack Empty", () => {
  const s = new Stack<number>(3);

  s.push(1);
  s.push(2);
  s.push(3);

  assertEquals(s.count, 3);

  s.empty();

  assertEquals(s.count, 0);
});

Deno.test("Contains", () => {
  const s = new Stack<number>(5);

  s.push(1);
  s.push(2);

  assertEquals(s.contains(2), true);
  assertEquals(s.contains(3), false);
});

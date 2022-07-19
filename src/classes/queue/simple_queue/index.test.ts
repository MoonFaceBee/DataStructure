import SimpleQueue from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";

Deno.test("SimpleQueue", () => {
  const q = new SimpleQueue(3);

  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);

  assertEquals(q.isFull, true);

  assertEquals(q.peek(), 1);

  q.dequeue();

  assertEquals(q.peek(), 2);

  q.dequeue();
  q.dequeue();

	assertEquals(q.length, 4)
	assertEquals(q.size, 3)

  assertEquals(q.isEmpty, true);
});

Deno.test("Contains", () => {
  const q = new SimpleQueue(2);

  q.enqueue(1);
  q.enqueue(2);

  assertEquals(q.contains(2), true);
});

Deno.test("Reset", () => {
  const q = new SimpleQueue(2);

  q.enqueue(1);
  q.enqueue(2);

  q.empty();

  assertEquals(q.isEmpty, true);
});

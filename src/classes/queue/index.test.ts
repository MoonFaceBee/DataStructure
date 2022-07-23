import Queue from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";

Deno.test("Queue", () => {
  const q = new Queue<number>(3);

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

	assertEquals(q.count, 0);
	assertEquals(q.size, 3);

  assertEquals(q.isEmpty, true);
});

Deno.test("Contains", () => {
  const q = new Queue<number>(2);

  q.enqueue(1);
  q.enqueue(2);

  assertEquals(q.contains(2), true);
});

Deno.test("Reset", () => {
  const q = new Queue<number>(2);

  q.enqueue(1);
  q.enqueue(2);

  q.empty();

  assertEquals(q.isEmpty, true);
});

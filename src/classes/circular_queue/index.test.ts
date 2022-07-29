import CircularQueue from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";

Deno.test("Circular Queue", () => {
  const c = new CircularQueue<number>(5);

  c.enqueue(1);
  c.enqueue(2);
  c.enqueue(3);
  c.enqueue(4);
  c.enqueue(5);

  assertEquals(c.isFull, true);
  assertEquals(c.peek(), 1);

  c.dequeue();

  assertEquals(c.peek(), 2);

  c.enqueue(6);

  c.dequeue();
  c.dequeue();

  assertEquals(c.peek(), 4);

  c.dequeue();

  assertEquals(c.peek(), 5);

  c.dequeue();
  c.dequeue();

  assertEquals(c.isEmpty, true);
});

Deno.test("Contains", () => {
  const c = new CircularQueue<number>(5);

  c.enqueue(1);
  c.enqueue(2);
  c.enqueue(3);
  c.enqueue(4);
  c.enqueue(5);

  c.dequeue();
  c.dequeue();
  c.dequeue();

  c.enqueue(6);
  c.enqueue(7);
  c.enqueue(8);
  c.enqueue(9);

  assertEquals(c.contains(1), false);
  assertEquals(c.contains(2), false);
  assertEquals(c.contains(3), false);
  assertEquals(c.contains(4), true);
  assertEquals(c.contains(5), true);
  assertEquals(c.contains(6), true);
  assertEquals(c.contains(7), true);
  assertEquals(c.contains(8), true);
  assertEquals(c.contains(9), false);
});

Deno.test("Reset", () => {
  const c = new CircularQueue<number>(3);

  c.enqueue(1);
  c.enqueue(2);
  c.enqueue(3);

  c.empty();

  assertEquals(c.isEmpty, true);
});

import CircularQueue from "./index.ts";

const c = new CircularQueue(5).enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5).isEmpty

console.log(c)
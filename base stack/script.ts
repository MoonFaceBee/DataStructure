import Stack from "./stack.ts";

const s = new Stack();

s.push(1);
s.push(12);
s.push(3);

console.log(s.pop());
console.log(s.peek());
console.log(s.pop());
console.log(s.isEmpty);
console.log(s.pop());
console.log(s.isEmpty);
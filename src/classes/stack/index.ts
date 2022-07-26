import IStack from "../../interfaces/stack.ts";

class Stack<T> implements IStack<T> {
  private top;

  //Array, Length
  private array: Array<T>;

  //define size and front and rear
  readonly size;

  constructor(size: number) {
    this.array = new Array<T>(size);
    this.size = size;
    this.top = -1;
  }

  get count(): number {
    return this.top + 1;
  }

  //check if full
  get isFull(): boolean {
    return this.top + 1 === this.size;
  }

  //Check if empty
  get isEmpty(): boolean {
    return this.top === -1;
  }

  //Push to array
  push(newItem: T): Stack<T> {
    if (!this.isFull) {
      this.top += 1;

      this.array[this.top] = newItem;
    }

    return this;
  }

  //Pop element
  pop(): T | undefined {
    let value;

    if (!this.isEmpty) {
      value = this.array[this.top];

      this.top -= 1;
    }

    return value;
  }

  //Get the value of last element
  peek(): T | undefined {
    if (!this.isEmpty) {
      return this.array[this.top];
    }

    return undefined;
  }

  //Empty the array
  empty(): void {
    if (!this.isEmpty) {
      this.top = -1;
    }
  }

  contains(item: T): boolean {
    return this.array.slice(0, this.top + 1).includes(item);
  }
}

export default Stack;

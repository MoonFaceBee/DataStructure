export type TQueueType = string | number | undefined;

class Queue {
  private array: Array<TQueueType> = [];

  //define size
  size = 5;
  constructor(size: number) {
    this.size = size;
  }

  //length
  get length(): number {
    return this.array.length;
  }

  //check if full
  get isFull(): boolean {
    return this.array.length === this.size;
  }

  //check if empty
  get isEmpty(): boolean {
    return this.array.length === 0;
  }

  //Add element to the end of array
  enqueue(newItem: TQueueType): this {
    if (!this.isFull) {
      this.array[this.array.length] = newItem;
    }

    return this;
  }

  //Delete element from first of the array
  dequeue(): TQueueType {
    if (!this.isEmpty) {
      return this.array.shift() as TQueueType;
    }
  }

  //Get value of first element
  peek(): TQueueType {
    return this.array[0];
  }

  //Reset
  empty() {
    if (!this.isEmpty) {
      this.array.length = 0;
    }
  }

  contains(item: TQueueType): boolean {
    return this.array.includes(item);
  }
}

export default Queue;

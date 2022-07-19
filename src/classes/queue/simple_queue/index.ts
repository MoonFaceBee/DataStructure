export type TSimpleQueueType = string | number | undefined;

class SimpleQueue {
  private array: Array<TSimpleQueueType> = [];

  //define size
  size;
	front = -1
	rear = -1
  constructor(size: number) {
    this.size = size;
  }

  //length
  get length(): number {
    return this.array.length;
  }

  //check if full
  get isFull(): boolean {
    // return this.array.length === this.size;
		return this.front === 0 && this.rear === this.size
  }

  //check if empty
  get isEmpty(): boolean {
    // return this.array.length === 0;
		return this.front === this.rear
  }

  //Add element to the end of array
  enqueue(newItem: TSimpleQueueType): this {
    if (!this.isFull) {
			this.rear = this.rear + 1
			if (this.front === -1) {
				this.front = this.front + 1
			}
      this.array[this.rear] = newItem;
    }

    return this;
  }

  //Delete element from first of the array
  dequeue(): TSimpleQueueType {
    if (!this.isEmpty) {
			return this.front = this.front + 1
    }
  }

  //Get value of first element
  peek(): TSimpleQueueType {
    return this.array[this.front];
  }

  //Reset
  empty() {
    if (!this.isEmpty) {
      this.array.length = 0;
			this.front = -1
			this.rear = -1
    }
  }

  contains(item: TSimpleQueueType): boolean {
    return this.array.includes(item);
  }
}

export default SimpleQueue;

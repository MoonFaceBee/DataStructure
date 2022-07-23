import IQueue from "../../interfaces/queue.ts";

class Queue<T> implements IQueue<T> {
	private front;
	private rear;

  private array: Array<T>;

  //define size and front and rear
  readonly size;

  constructor(size: number) {
    this.array = new Array<T>(size);
		this.size = size;
    this.front = -1;
    this.rear = -1;
  }

  //length
  get count(): number {
    return this.rear - this.front + 1;
  }

  //check if full
  get isFull(): boolean {
		return this.rear + 1 === this.size;
  }

  //check if empty
  get isEmpty(): boolean {
		return this.front === -1 || this.rear === -1 || this.front > this.rear;
  }

  //Add element to the end of array
  enqueue(newItem: T): Queue<T> {
    if (!this.isFull) {
			this.rear += 1;

			if (this.front === -1) {
				this.front += 1;
			}

      this.array[this.rear] = newItem;
    }

    return this;
  }

  //Delete element from first of the array
  dequeue(): T | undefined {
    let value;

    if (!this.isEmpty) {
      value = this.array[this.front];

      this.front += 1;
    }
    
    return value;
  }

  //Get value of first element
  peek(): T | undefined {
    if (!this.isEmpty) {
      return this.array[this.front];
    }

    return undefined;
  }

  //Reset
  empty(): void {
    if (!this.isEmpty) {
			this.front = -1;
			this.rear = -1;
    }
  }

  contains(item: T): boolean {
    return this.array.slice(this.front, this.rear + 1).includes(item);
  }
}

export default Queue;

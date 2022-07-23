import IQueue from "../../interfaces/queue.ts";

class CircularQueue<T> implements IQueue<T> {
	private front;
	private rear;

	private array: Array<T>;

	readonly size;

	constructor(size: number) {
		this.array = new Array<T>(size);
		this.size = size;
		this.front = -1;
		this.rear = -1;
	}

	get count(): number {
		if (this.isEmpty) {
			return 0;
		}

		if (this.rear >= this.front) {
			return this.rear - this.front + 1;
		} else {
			return (this.size - this.front) + (this.rear + 1);
		}
	}

	get isFull(): boolean {
		return this.count === this.size;
	}

	get isEmpty(): boolean {
		return this.front === -1 || this.rear === -1 || this.count === 0;
	}

	enqueue(item: T): IQueue<T> {
		if (!this.isFull) {
			this.front += this.front
		}
	}

	dequeue(): T | undefined {
	}

	peek(): T | undefined {
	}

	empty() {
	}

	contains(item: T): boolean {
	}
}

export default CircularQueue;
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

			if (this.rear + 1 === this.size && this.front > 0) {
				this.rear = (this.rear + 1) % this.size
			} else {
				this.rear += 1
			}

			this.array[this.rear] = item
			// if (this.front === -1) {
			// 	this.front += 1
			// }
		}

		return this
	}

	dequeue(): T | undefined {
		let value;

		if (!this.isEmpty) {
			value = this.array[this.front];

			if (this.front === this.rear) {
				this.front -= 1
				this.rear -= 1
			} else {
				this.front += 1
			}
		}

		return value
	}

	peek(): T | undefined {
		if (!this.isEmpty) {
			return this.array[this.front];
		}

		return undefined;
	}

	empty() {
		if (!this.isEmpty) {
			this.front = -1;
			this.rear = -1;
		}
	}

	contains(item: T): boolean {
		if (this.front < this.rear) {
			return this.array.slice(this.front, this.rear + 1).includes(item);
		} else {
			return this.array.slice(this.front, this.size - 1).includes(item) || this.array.slice(0, this.rear).includes(item)
		}
	}
}

export default CircularQueue;
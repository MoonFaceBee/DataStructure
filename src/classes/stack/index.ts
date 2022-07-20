export type TStackType = string | number | undefined;

class Stack {
  //Array, Length
  private array: Array<TStackType> = [];

	//define size and front and rear
	size;
	top = -1
	constructor(size: number) {
		this.size = size;
	}

  get length(): number {
    return this.array.length;
  }

	//check if full
	get isFull(): boolean {
		return this.top === this.size
	}

  //Check if empty
  get isEmpty(): boolean {
    return this.top === -1;
  }

  //Push to array
  push(newItem: TStackType): this {
		if (!this.isFull) {
			this.top = this.top + 1
			this.array[this.array.length] = newItem;
		}

    return this;
  }

  //Pop element
  pop(): TStackType {
		if (!this.isEmpty) {
			this.top = this.top - 1
			return this.array[this.top]
		}
  }

  //Get the value of last element
  peek(): TStackType {
    return this.array[this.top]
  }

  //Empty the array
  empty() {
    if (!this.isEmpty) {
			this.array.length = 0;
			this.top = -1
		}
  }

  contains(item: TStackType): boolean {
    return this.array.includes(item);
  }
}

export default Stack;

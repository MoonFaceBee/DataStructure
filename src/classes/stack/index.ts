export type TStackType = string | number | undefined;

class Stack {
  //Array, Length
  private array: Array<TStackType> = [];

  get length(): number {
    return this.array.length;
  }

  //Check if the element is empty
  get isEmpty(): boolean {
    return this.array.length === 0;
  }

  //Push to array
  push(newItem: TStackType): this {
    this.array[this.array.length] = newItem;

    return this;
  }

  //Pop element
  pop(): TStackType {
    const val = this.array.at(-1);
    this.array.length -= 1;
    return val as TStackType;
  }

  //Get the value of last element
  peek(): TStackType {
    return this.array.at(-1) as TStackType;
  }

  //Empty the array
  empty() {
    this.array.length = 0;
  }

  contains(item: TStackType): boolean {
    return this.array.includes(item);
  }
}

export default Stack;

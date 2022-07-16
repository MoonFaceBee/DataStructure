//  TODO: Use <Generics>
class Stack {
  //Array, Length, Last Index(top)
  private array: any[] = [];

  //Check if the element is empty
  get isEmpty(): boolean {
    return this.array.length === 0;
  }

  get length(): number {
    return this.array.length;
  }

  //Push to array
  push(newItem: any): any {
    this.array[this.array.length] = newItem;

    return this;
  }

  //Pop element
  pop(): any {
    const val = this.array.at(-1);
    this.array.length -= 1;
    return val;
  }

  //Get the value of last element
  peek(): any {
    return this.array.at(-1);
  }

  //Empty the array
  empty(): any {
    this.array.length = 0;
  }

	contains(item: any): boolean {
		return this.array.includes(item)
	}
}

export default Stack;

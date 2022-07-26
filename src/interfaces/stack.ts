interface IStack<T> {
  readonly size: number;

  get count(): number;

  get isEmpty(): boolean;
  get isFull(): boolean;

  push(item: T): IStack<T>;
  peek(): T | undefined;
  pop(): T | undefined;

  empty(): void;

  contains(item: T): boolean;
}

export default IStack;

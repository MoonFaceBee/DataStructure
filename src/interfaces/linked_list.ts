interface ILinkedList<T> {
  traverse(index: number): ILinkedList<T>;
  addToEnd(data: T): void;
  addToBeginning(data: T): void;
  deleteFromBeginning(): void;
}

export default ILinkedList;

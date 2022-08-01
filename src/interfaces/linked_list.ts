interface ILinkedList<T> {
  traverse(index: number): T;
  addToEnd(data: T): void;
  addToBeginning(data: T): void;
  deleteFromBeginning(): void;
}

export default ILinkedList;

interface ILinkedList<T> {
	traverse(index: number) : object | undefined
  addToEnd(data: T): void;
  addToBeginning(data: T): void;
  deleteFromBeginning(): void;
}

export default ILinkedList;

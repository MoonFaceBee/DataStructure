interface ILinkedList<T> {
	get(index: number): T | undefined;

	get length(): number;

	addToBeginning(data: T): void;
	addTo(data: T, index: number) : void;
	addToEnd(data: T): void;

  deleteFromBeginning(): void;
	deleteFrom(index: number) : void;
	deleteFromEnd(): void;
}

export default ILinkedList;

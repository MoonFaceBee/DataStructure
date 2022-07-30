
interface ILinkedList<T> {
	addToEnd(data: T): ILinkedList<T>
	addToBeginning(data: T): ILinkedList<T>
	deleteFromBeginning(): T | undefined
}

export default ILinkedList;
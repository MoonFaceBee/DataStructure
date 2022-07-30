type LinkedListNode = {
	data: number;
	next?: LinkedListNode;
};

class LinkedList {
	first = null;

	addToEnd(data: number) {
		if (this.first === null) {
			this.first = {data, next: null};
		} else {
			let cursor = this.first;
			while(cursor.next !== null) {
				cursor = cursor.next;
			}
			cursor.next = {data, next: null}
		}
	}

	addToBeginning(data: number) {
		const newNode = {data: data, next: this.first}
		this.first = newNode
	}
}

const ll = new LinkedList();
ll.addToEnd(123)
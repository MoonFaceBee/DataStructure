type LinkedListNode = {
	data: number;
	next?: LinkedListNode;
};

class LinkedList {
	first = null;

	add(data: number) {
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
}

const ll = new LinkedList();
ll.add(123)
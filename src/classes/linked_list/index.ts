import ILinkedList from "../../interfaces/linked_list.ts";

type LinkedListNode = {
  data: ILinkedList<number> | null;
  next?: LinkedListNode | null;
};

class LinkedList<T> implements ILinkedList<T> {
  head: LinkedListNode = { data: null, next: null };

  traverse(index: number): T {
    let goal;
    let element: LinkedListNode;

    element = this.head

		let i = 0;
		while (element.next !== null) {
			element = element.next;
			i++;

			if (i === index) {
				goal = element.data
			}
		}

    return goal;
  }

  addToEnd(data: T) {
    if (this.head === null) {
      this.head = { data, next: null };
    } else {
      let cursor = this.head;
      while (cursor.next !== null) {
        cursor = cursor.next;
      }
      cursor.next = { data, next: null };
    }

    return this;
  }

  addToBeginning(data: T) {
    this.head = { data: data, next: this.head };
  }

  deleteFromBeginning(): void {
    this.head = this.head.next;
  }

  //Traversal - access each element of the linked list
  //Insertion - adds a new element to the linked list {beginning, middle or end}
  //Deletion - removes the existing elements {beginning, end or from a particular position}
}

export default LinkedList;

const ll = new LinkedList();
ll.addToEnd(123);
ll.addToEnd(456);
ll.addToEnd(789);
ll.deleteFromBeginning();
ll.addToBeginning(102);

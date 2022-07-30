import ILinkedList from "../../interfaces/linked_list.ts";

type LinkedListNode = {
	data: number;
	next?: LinkedListNode;
} | null;

class LinkedList<T> implements ILinkedList<T>{
  head: LinkedListNode = null ;

  addToEnd(data: T): ILinkedList<T> {
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

  addToBeginning(data: T): ILinkedList<T> {
    const newNode = { data: data, next: this.head };
    this.head = newNode;

		return this
  }

  deleteFromBeginning(): LinkedListNode | undefined {
    let nextOne = this.head.next;
    this.head = nextOne;

		return nextOne;
  }

  //Traversal - access each element of the linked list
  //Insertion - adds a new element to the linked list {beginning, middle or end}
  //Deletion - removes the existing elements {beginning, end or from a particular position}

}

export default LinkedList;

const ll = new LinkedList();
ll.addToEnd(123);
ll.addToEnd(456);
console.log(ll.addToEnd(789));

// @ts-ignore
import ILinkedList from "../../interfaces/linked_list.ts";

type LinkedListNode = {
  data: ILinkedList<number>;
  next?: LinkedListNode | null;
};

class LinkedList<T> implements ILinkedList<T> {
  head: LinkedListNode;

	private getNode(index: number): LinkedListNode | undefined {
		let cursor: LinkedListNode = this.head;

		let i = 0;
		do {
			if (i === index) {
				return cursor
			}

			cursor = cursor.next;
			i++;
		} while (cursor !== null);
	}

	get(index: number): T {
    return this.getNode(index)?.data
  }

	addToBeginning(data: T) {
		this.head = { data: data, next: this.head };
	}

	addTo(data: T, index: number) {
		const insertedNext = this.getNode(index)
		this.getNode(index - 1).next = {data: data, next: insertedNext}
	}

  addToEnd(data: T) {
    if (!this.head) {
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

  deleteFromBeginning(): void {
    this.head = this.head.next;
  }

	deleteFrom(index: number): void {
		if (index === 0) {
			this.deleteFromBeginning()
		} else {
			this.getNode(index - 1).next = this.getNode(index + 1)
		}
	}

  deleteFromEnd() {
		let cursor: LinkedListNode = this.head;

		let i = 0;
		do {
			cursor = cursor.next;
			i++;
		} while (cursor !== null);

		this.getNode(i - 2).next = null
	}
}

export default LinkedList;
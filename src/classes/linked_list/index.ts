import ILinkedList from "../../interfaces/linked_list.ts";

type LinkedListNode<T> = {
  data: T;
  next: LinkedListNode<T> | null;
} | null;

class LinkedList<T> implements ILinkedList<T> {
  [index: number]: number | undefined

  head: LinkedListNode<T> = null;

  constructor() {
    const instance = this;
    return new Proxy(instance, {
      get(target, prop, receiver) {
        if (typeof prop === "string" && /\d+/.test(prop as string)) {
          return instance.get(parseInt(prop));
        }

        return Reflect.get(target, prop, receiver);
      },

      set(target, prop, value, receiver) {
        if (typeof prop === "string" && /\d+/.test(prop as string)) {
          const node = instance.getNode(parseInt(prop));
          if (node) {
            node.data = value;
          }
          return true;
        } else {
          return Reflect.set(target, prop, value, receiver);
        }
      },
    });
  }

  private getNode(index: number): LinkedListNode<T> | undefined {
    let cursor: LinkedListNode<T> = this.head;

    let i = 0;
    while (cursor !== null) {
      if (i === index) {
        return cursor;
      }

      cursor = cursor.next;
      i++;
    }
  }

  get length(): number {
    let cursor: LinkedListNode<T> = this.head;

    let count = 0;

    while (cursor !== null) {
      cursor = cursor.next;
      count++;
    }

    return count;
  }

  get(index: number): T | undefined {
    return this.getNode(index)?.data;
  }

  addToBeginning(data: T) {
    this.head = { data: data, next: this.head };
  }

  addTo(data: T, index: number) {
    if (index === 0) {
      this.addToBeginning(data);
    } else {
      const prevNode = this.getNode(index - 1);

      if (prevNode) {
        prevNode.next = { data, next: prevNode.next };
      }
    }
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
    if (this.head?.next) {
      this.head = this.head.next;
    }
  }

  deleteFrom(index: number): void {
    if (index === 0) {
      this.deleteFromBeginning();
    } else {
      const prevNode = this.getNode(index - 1);

      if (prevNode) {
        const currentNode = prevNode?.next;

        if (currentNode) {
          const nextNode = prevNode?.next?.next;

          if (nextNode) {
            currentNode.next = null;
            prevNode.next = nextNode;
          } else {
            prevNode.next = null;
          }
        }
      }
    }
  }

  deleteFromEnd() {
    let cursor: LinkedListNode<T> = this.head;

    while (cursor?.next?.next !== null) {
      cursor = cursor!.next;
    }

    cursor!.next = null;
  }

  includes(data: T): boolean {
    let current = this.head;

    while (current !== null) {
      if (current.data === data) {
        return true;
      }

      current = current.next;
    }

    return false;
  }
}

export default LinkedList;

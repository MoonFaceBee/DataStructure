import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import LinkedList from "./index.ts";

Deno.test('Insert To LinkedList', () => {
	const myLinkedList = new LinkedList<number>()

	myLinkedList.addToEnd(1)
	myLinkedList.addToEnd(2)
	myLinkedList.addToEnd(3)
	myLinkedList.addToEnd(4)
	myLinkedList.addToEnd(5)

	myLinkedList.addTo(6, 3)
	assertEquals(myLinkedList.length, 6)

	myLinkedList.addToBeginning(0)
	assertEquals(myLinkedList.length, 7)
})

Deno.test('Delete From LinkedList', () => {
	const myLinkedList = new LinkedList<number>()

	myLinkedList.addToEnd(1)
	myLinkedList.addToEnd(2)
	myLinkedList.addToEnd(3)
	myLinkedList.addToEnd(4)
	myLinkedList.addToEnd(5)

	myLinkedList.deleteFromBeginning()
	assertEquals(myLinkedList.length, 4)

	myLinkedList.deleteFrom(3)
	assertEquals(myLinkedList.length, 3)

	myLinkedList.deleteFromEnd()
	assertEquals(myLinkedList.length, 2)
})

Deno.test('Get', () => {
	const myLinkedList = new LinkedList<number>()

	myLinkedList.addToEnd(1)
	myLinkedList.addToEnd(2)
	myLinkedList.addToEnd(3)
	myLinkedList.addToEnd(4)
	myLinkedList.addToEnd(5)

	assertEquals(myLinkedList.get(0), 1)
	assertEquals(myLinkedList.get(3), 4)
	assertEquals(myLinkedList.get(4), 5)
})
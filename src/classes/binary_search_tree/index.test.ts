import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import BinarySearchTree from "./index.ts";

Deno.test("Insert Node", () => {
	const myTree = new BinarySearchTree<number>()

	myTree.insert(5)
	myTree.insert(8)
	myTree.insert(4)
	myTree.insert(9)
	myTree.insert(7)
	myTree.insert(3)
	
	assertEquals(myTree.root.left.data, 4)
	assertEquals(myTree.root.right.right.data, 9)
})

Deno.test("Search Node", () => {
	const myTree = new BinarySearchTree<number>()

	myTree.insert(5)
	myTree.insert(8)
	myTree.insert(4)
	myTree.insert(9)
	myTree.insert(7)
	myTree.insert(3)

	assertEquals(myTree.search(1), undefined)
	assertEquals(myTree.search(5), myTree.root)
	assertEquals(myTree.search(8), myTree.root.right)
})
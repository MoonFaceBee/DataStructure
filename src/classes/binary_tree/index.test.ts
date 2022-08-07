import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import BinaryTree from "./index.ts";

Deno.test("Height Of Tree", () => {
	const myTree = new BinaryTree(1);

	myTree.root.setLeft(2)
	myTree.root.setRight(3)
	myTree.root.left.setLeft(4)
	myTree.root.left.setRight(5)
	myTree.root.right.setRight(6)


	assertEquals(myTree.height, 2)
});

Deno.test("Height Of Node", () => {
	const myTree = new BinaryTree(1);

	myTree.root.setLeft(2)
	myTree.root.setRight(3)
	myTree.root.left.setLeft(4)
	myTree.root.left.setRight(5)
	myTree.root.right.setRight(6)


	assertEquals(myTree.root.left.height, 1)
});

//Todo: Fix null issue
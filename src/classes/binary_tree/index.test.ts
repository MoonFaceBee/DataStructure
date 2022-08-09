import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import BinaryTree, { BinaryTreeNode } from "./index.ts";

Deno.test("Height Of Tree", () => {
  const myTree = new BinaryTree<number>(1);

  myTree.root.setLeft(2);
  myTree.root.setRight(3);
  myTree.root.left.setLeft(4);
  myTree.root.left.setRight(5);
  myTree.root.right.setRight(6);

  assertEquals(myTree.height, 2);
});

Deno.test("Height Of Node", () => {
  const myTree = new BinaryTree<number>(1);

  myTree.root.setLeft(2);
  myTree.root.setRight(3);
  myTree.root.left.setLeft(4);
  myTree.root.left.setRight(5);
  myTree.root.right.setRight(6);

  assertEquals(myTree.root.left.height, 1);
});

Deno.test("Depth Of Tree", () => {
  const myTree = new BinaryTree<number>(1);

  myTree.root.setLeft(2);
  myTree.root.setRight(3);
  myTree.root.left.setLeft(4);
  myTree.root.left.setRight(5);
  myTree.root.right.setRight(6);

  assertEquals(myTree.root.depth, 0);
});

Deno.test("Depth Of Node", () => {
  const myTree = new BinaryTree<number>(1);

  myTree.root.setLeft(2);
  myTree.root.setRight(3);
  myTree.root.left?.setLeft(4);
  myTree.root.left?.setRight(5);
  myTree.root.right?.setRight(6);

  assertEquals(myTree.root.left.depth, 1);
});

Deno.test("Degree Of Node", () => {
  const node = new BinaryTreeNode<number>(null as any, 1);

  assertEquals(node.degree, 0);

  node.setLeft(2);
  assertEquals(node.degree, 1);

  node.setRight(3);
  assertEquals(node.degree, 2);

  node.right = null as any;
  assertEquals(node.degree, 1);
});

Deno.test("Is Full", () => {
  const myTree = new BinaryTree<number>(1);

  myTree.root.setLeft(2);
  myTree.root.setRight(3);
  myTree.root.left?.setLeft(4);
  myTree.root.left?.setRight(5);

  assertEquals(myTree.isFull, true);

  myTree.root.right?.setRight(6);

  assertEquals(myTree.isFull, false);
});

Deno.test("Is Perfect", () => {
  const myTree = new BinaryTree<number>(1);

  myTree.root.setLeft(2);
  myTree.root.setRight(3);
  myTree.root.left?.setLeft(4);
  myTree.root.left?.setRight(5);
  myTree.root.right?.setLeft(6);
  myTree.root.right?.setRight(7);

  assertEquals(myTree.isPerfect, true);

	myTree.root.right?.right.setRight(8);

  assertEquals(myTree.isPerfect, false);
});

Deno.test("Is Balanced", () => {
  const myTree = new BinaryTree<number>(1);

  myTree.root.setLeft(2);
  myTree.root.setRight(3);
  myTree.root.left?.setLeft(4);
  myTree.root.left?.setRight(5);

	assertEquals(myTree.isBalanced, true);

  myTree.root.left.right?.setLeft(6);

  assertEquals(myTree.isBalanced, false);
});

Deno.test("Is Complete", () => {
  const myTree = new BinaryTree<number>(1);

  myTree.root.setLeft(2);
  myTree.root.setRight(3);
  myTree.root.left?.setLeft(4);
  myTree.root.left?.setRight(5);
  myTree.root.right.setLeft(6);

	assertEquals(myTree.isComplete, true);

  myTree.root.left.left.setRight(7);

	assertEquals(myTree.isComplete, false);
});

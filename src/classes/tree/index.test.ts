import Tree from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";

Deno.test("Height Of Tree", () => {
  const myTree = new Tree(1);

  myTree.root.addChild(2);
  myTree.root.addChild(3);
  myTree.root.addChild(4);

  myTree.root.children[0].addChild(5);
  myTree.root.children[1].addChild(6);
  myTree.root.children[2].addChild(7);

  assertEquals(myTree.height, 2);
});

Deno.test("Height Of Node", () => {
  const myTree = new Tree(1);

  myTree.root.addChild(2);
  myTree.root.addChild(3);
  myTree.root.addChild(4);

  myTree.root.children[0].addChild(5);
  myTree.root.children[1].addChild(6);
  myTree.root.children[2].addChild(7);

  assertEquals(myTree.root.children[0].height, 1);
});

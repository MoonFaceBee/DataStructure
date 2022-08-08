import { ITree, ITreeNode } from "../../interfaces/tree.ts";

class TreeNode<T> implements ITreeNode<T> {
  data: T;
  tree: Tree<T>;
  children: TreeNode<T>[] = [];

  constructor(tree: Tree<T>, data: T) {
    this.tree = tree;
    this.data = data;
  }

  addChild(data: T): void {
    const child = new TreeNode<T>(this.tree, data);
    this.children.push(child);
  }

  removeChild(index: number): void {
    this.children.splice(index, 1);
  }

  private heightOfNodeHelper(node: TreeNode<T>): number {
    if (node.children.length === 0) {
      return 0;
    }

    const childrenHeights = node.children.map((child) => child.height);

    return Math.max(...childrenHeights) + 1;
  }

  get height(): number {
    return this.heightOfNodeHelper(this);
  }

  private depthOfNodeHelper(root: TreeNode<T>, node: TreeNode<T>): number {
    let d = -1;

    if (node === null) {
      return -1;
    }

		const childrenDepth = root.children.map((child) => this.depthOfNodeHelper(child, node ))


		if (root === node) {
			for (let i = 0; i < childrenDepth.length; i++) {
				d += childrenDepth[i]
			}
		}

		return d
  }

  get depth(): number {
    return this.depthOfNodeHelper(this.tree.root, this);
  }

  //Todo: Depth of Node
  //Todo: Degree of Node

  //Todo: Create Forest
}

class Tree<T> implements ITree<T> {
  root: TreeNode<T>;

  constructor(rootData: T) {
    this.root = new TreeNode<T>(this, rootData);
  }

  get height(): number {
    return this.root.height;
  }
}

export default Tree;

const myTree = new Tree(1);

myTree.root.addChild(2);
myTree.root.addChild(3);
myTree.root.addChild(4);

myTree.root.children[0].addChild(5);
myTree.root.children[1].addChild(6);
myTree.root.children[2].addChild(7);

console.log(myTree.root.children[0].depth)

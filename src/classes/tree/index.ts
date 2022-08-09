import { ITree, ITreeNode } from "../../interfaces/tree.ts";

export class TreeNode<T> implements ITreeNode<T> {
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

  private depthOfNodeHelper(node: TreeNode<T>): number {
    if (node === this) {
      return 0;
    } else if (node.children.length === 0) {
      return -1;
    }

    const childDepths = node.children.map((child) =>
      this.depthOfNodeHelper(child)
    );

    if (childDepths.every((depth) => depth === -1)) {
      return -1;
    }

    return Math.max(...childDepths) + 1;
  }

  get depth(): number {
    return this.depthOfNodeHelper(this.tree.root);
  }

  get degree(): number {
    return this.children.length;
  }
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

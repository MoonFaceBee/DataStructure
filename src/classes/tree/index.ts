import ITreeNode from "../../interfaces/tree.ts";

class TreeNode<T> {
  data: T;
  children: TreeNode<T>[] = [];

  constructor(data: T) {
    this.data = data;
  }

  addChild(data: T): void {
    const child = new TreeNode<T>(data);
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

  //Todo: Depth of Node
  //Todo: Degree of Node

  //Todo: Create Forest
}

class Tree<T> implements ITreeNode<T> {
  root: TreeNode<T>;

  constructor(rootData: T) {
    this.root = new TreeNode<T>(rootData);
  }

  get height(): number {
    return this.root.height;
  }
}

export default Tree;

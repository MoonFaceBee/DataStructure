import ITreeNode from "../../interfaces/tree.ts";

class TreeNode<T> implements ITreeNode<T>{
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
		this.children.splice(index, 1)
	}

	//Todo: Add height & depth & degree
}

class Tree<T> {
  root: TreeNode<T>;

  constructor(rootData: T) {
    this.root = new TreeNode<T>(rootData);
  }
}

export default Tree;

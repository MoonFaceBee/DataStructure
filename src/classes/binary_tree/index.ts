import {IBinaryTree} from "../../interfaces/binary_tree.ts";

class BinaryTreeNode<T> {
  data: T;
  left: BinaryTreeNode<T> = null;
  right: BinaryTreeNode<T> = null;

  constructor(data: T) {
    this.data = data;
  }

  setLeft(data: T) {
    this.left = new BinaryTreeNode<T>(data);
  }

  setRight(data: T) {
    this.right = new BinaryTreeNode<T>(data);
  }

  private heightOfNodeHelper(node: BinaryTreeNode<T>): number {
    if (node === null) {
      return -1;
    }

    const heightOfLeft = this.heightOfNodeHelper(node.left);
    const heightOfRight = this.heightOfNodeHelper(node.right);

    return Math.max(heightOfLeft, heightOfRight) + 1;
  }

  get height(): number {
    return this.heightOfNodeHelper(this);
  }
}

class BinaryTree<T> implements IBinaryTree<T>{
  root: BinaryTreeNode<T> = null;

  constructor(rootData: T) {
    this.root = new BinaryTreeNode<T>(rootData);
  }

  get height(): number {
    return this.root.height;
  }

  private preorderTraverse(
    node: BinaryTreeNode<T>,
    visitor: (data: T) => void,
  ) {
    visitor(node.data);

    if (node.left) {
      this.preorderTraverse(node.left, visitor);
    }

    if (node.right) {
      this.preorderTraverse(node.right, visitor);
    }
  }

  preorder(visitor: (data: T) => void) {
    this.preorderTraverse(this.root, visitor);
  }

  private postorderTraverse(
    node: BinaryTreeNode<T>,
    visitor: (data: T) => void,
  ) {
    if (node.left) {
      this.postorderTraverse(node.left, visitor);
    }

    if (node.right) {
      this.postorderTraverse(node.right, visitor);
    }

    visitor(node.data);
  }

  postorder(visitor: (data: T) => void) {
    this.postorderTraverse(this.root, visitor);
  }

  private inorderTraverse(node: BinaryTreeNode<T>, visitor: (data: T) => void) {
    if (node.left) {
      this.inorderTraverse(node.left, visitor);
    }

    visitor(node.data);

    if (node.right) {
      this.inorderTraverse(node.right, visitor);
    }
  }

  inorder(visitor: (data: T) => void) {
    this.inorderTraverse(this.root, visitor);
  }
}

export default BinaryTree;



//Todo: Depth of Node
//Todo: Degree of Node
//Todo: Create Forest

//Todo: if Full Binary Tree
//Todo: if Perfect Binary Tree
//Todo: if Balanced Binary Tree
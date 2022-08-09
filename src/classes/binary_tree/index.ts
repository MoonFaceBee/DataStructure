import { IBinaryTree, IBinaryTreeNode } from "../../interfaces/binary_tree.ts";

class BinaryTreeNode<T> implements IBinaryTreeNode<T> {
  data: T;
  tree: BinaryTree<T>;
  left: BinaryTreeNode<T> = null as any;
  right: BinaryTreeNode<T> = null as any;

  constructor(binaryTree: BinaryTree<T>, data: T) {
    this.tree = binaryTree;
    this.data = data;
  }

  setLeft(data: T) {
    this.left = new BinaryTreeNode<T>(this.tree, data);
  }

  setRight(data: T) {
    this.right = new BinaryTreeNode<T>(this.tree, data);
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

  private depthOfNodeHelper(node: BinaryTreeNode<T>): number {
		if (node === this) {
			return 0;
		} else if (!node.left && !node.right) {
			return -1;
		}

		const leftDepth = node.left ? this.depthOfNodeHelper(node.left) : -1;
		const rightDepth = node.right ? this.depthOfNodeHelper(node.right) : -1;

		if (leftDepth === -1 && rightDepth === -1) {
			return -1;
		}

		return Math.max(leftDepth, rightDepth) + 1
  }

  get depth(): number {
    return this.depthOfNodeHelper(this.tree.root);
  }
}

class BinaryTree<T> implements IBinaryTree<T> {
  root: BinaryTreeNode<T>;

  constructor(rootData: T) {
    this.root = new BinaryTreeNode<T>(this, rootData);
  }

  get height(): number {
    return this.root.height;
  }

  get depth(): number {
    return this.root.depth;
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

//Todo: Degree of Node
//Todo: Create Forest

//Todo: if Full Binary Tree
//Todo: if Perfect Binary Tree
//Todo: if Balanced Binary Tree

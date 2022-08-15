import { IBinaryTree, IBinaryTreeNode } from "../../interfaces/binary_tree.ts";

export class BinaryTreeNode<T> implements IBinaryTreeNode<T> {
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

    return Math.max(leftDepth, rightDepth) + 1;
  }

  get depth(): number {
    return this.depthOfNodeHelper(this.tree.root);
  }

  get degree(): number {
    return (this.left ? 1 : 0) + (this.right ? 1 : 0);
  }

  get isLeaf(): boolean {
    return (this.left === null && this.right === null);
  }
}

class BinaryTree<T> implements IBinaryTree<T> {
  root: BinaryTreeNode<T>;

  constructor(rootData?: T) {
		if (rootData !== undefined) {
			this.root = new BinaryTreeNode<T>(this, rootData);
		} else {
			this.root = null as any;
		}
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

  get count(): number {
    let c = 0;

    this.inorderTraverse(this.root, () => {
      c++;
    });

    return c;
  }

  private isFullHelper(node: BinaryTreeNode<T>): boolean {
    return ((node.left === null && node.right === null) ||
      (node.left !== null && node.right !== null)) &&
      (!node.left || this.isFullHelper(node.left)) &&
      (!node.right || this.isFullHelper(node.right));
  }

  get isFull(): boolean {
    return this.isFullHelper(this.root);
  }

  private isPerfectHelper(node: BinaryTreeNode<T>): boolean {
    return node.isLeaf ||
      (node.left && node.right && node.left.height === node.right.height &&
        this.isPerfectHelper(node.left) && this.isPerfectHelper(node.right));
  }

  get isPerfect(): boolean {
    return this.isPerfectHelper(this.root);
  }

  private extractLevels(): BinaryTreeNode<T>[][] {
    const nodesCount = this.count;
    const levels = [[this.root]];

    let levelIndex = 0;
    let processedNodes = 1;

    while (processedNodes < nodesCount) {
      levels.push([]);

      levels[levelIndex].forEach((node) => {
        if (node.left) {
          levels[levelIndex + 1].push(node.left);
          processedNodes++;
        }

        if (node.right) {
          levels[levelIndex + 1].push(node.right);
          processedNodes++;
        }
      });

      levelIndex++;
    }

    return levels;
  }

  private isCompleteHelper(
    node: BinaryTreeNode<T>,
    index: number,
    array: BinaryTreeNode<T>[],
  ): boolean {
    if (node === null) {
      return true;
    }

    if (index >= array.length) {
      return false;
    }

    return this.isCompleteHelper(node.left, index * 2 + 1, array) &&
      this.isCompleteHelper(node.right, index * 2 + 2, array);
  }

  get isComplete(): boolean {
    const levels = this.extractLevels();
    const array = levels.flat();

    if (array.length >= 2 ** levels.length - 1) {
      return false;
    }

    return this.isCompleteHelper(this.root, 0, array);
  }

  get isBalanced(): boolean {
    return Math.abs(
      (this.root.left ? this.root.left.height : 0) -
        (this.root.right ? this.root.right.height : 0),
    ) <= 1;
  }

	print() {
		const levels = this.extractLevels().map(level=>level.map(node => node.data));

		console.log(JSON.stringify(levels));
	}
}

export default BinaryTree;

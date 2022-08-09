export interface IBinaryTree<T> {
  preorder(visitor: (data: T) => void): void;
  postorder(visitor: (data: T) => void): void;
  inorder(visitor: (data: T) => void): void;

  get height(): number;
  get depth(): number;

  get isFull(): boolean;
  get isPerfect(): boolean;
  get isComplete(): boolean;
  get isBalanced(): boolean;
}

export interface IBinaryTreeNode<T> {
  setLeft(data: T): void;
  setRight(data: T): void;

  get height(): number;
  get depth(): number;
  get degree(): number;

  get isLeaf(): boolean;
}

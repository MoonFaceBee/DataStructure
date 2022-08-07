export interface IBinaryTree<T> {
  preorder(visitor: (data: T) => void): void;
  postorder(visitor: (data: T) => void): void;
  inorder(visitor: (data: T) => void): void;

	get height(): number
}
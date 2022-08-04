export interface IBinaryTreeNode<T> {
	setLeft(data: T) :void;
	setRight(data: T): void;
}

export interface IBinaryTree<T> {
	preorderTraverse(node: IBinaryTreeNode<T>, visitor: (data: T) => void): void;
	preorder(visitor: (data: T) => void): void;

	postorderTraverse(node: IBinaryTreeNode<T>, visitor: (data: T) => void): void;
	postorder(visitor: (data: T) => void):void;

	inorderTraverse(node: IBinaryTreeNode<T>, visitor: (data: T) => void): void;
	inorder(visitor: (data: T) => void):void;

}

//Todo: fix error

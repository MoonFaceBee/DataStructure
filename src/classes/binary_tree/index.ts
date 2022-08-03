class BinaryTreeNode<T> {
	data: T;
	left: BinaryTreeNode<T> = null;
	right: BinaryTreeNode<T> = null;

	constructor(data: T) {
		this.data = data;
	}

	setLeft(data: T) {
		this.left = new BinaryTreeNode<T>(data)
	}

	setRight(data: T) {
		this.right = new BinaryTreeNode<T>(data)
	}
}

class BinaryTree<T> {
	root: BinaryTreeNode<T> = null;

	constructor(rootData: T) {
		this.root = new BinaryTreeNode<T>(rootData);
	}

	private preorderTraverse(node: BinaryTreeNode<T>, visitor: (data: T) => void) {
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

	private postorderTraverse(node: BinaryTreeNode<T>, visitor: (data: T) => void) {
		if (node.left) {
			this.postorderTraverse(node.left, visitor)
		}

		if (node.right) {
			this.postorderTraverse(node.right, visitor)
		}

		visitor(node.data)
	}

	postorder(visitor: (data: T) => void) {
		this.postorderTraverse(this.root, visitor)
	}

	private inorderTraverse(node: BinaryTreeNode<T>, visitor: (data: T) => void) {
		if (node.left) {
			this.inorderTraverse(node.left, visitor)
		}

		visitor(node.data)

		if (node.right) {
			this.inorderTraverse(node.right, visitor)
		}
	}

	inorder(visitor: (data: T) => void) {
		this.inorderTraverse(this.root, visitor)
	}
}



const bt = new BinaryTree<number>(1);

bt.root.setLeft(2)
bt.root.setRight(3)

bt.root.left.setLeft(4)
bt.root.left.setRight(5)

bt.root.right.setLeft(6)
bt.root.right.setRight(7)

bt.root.left.left.setRight(8);
bt.root.right.left.setLeft(9);

// console.log(JSON.stringify(bt, null, '  '));

bt.preorder((data) => {
	console.log(data)
})

console.log(' ')

bt.postorder((data) => {
	console.log(data)
})

console.log(' ')

bt.inorder((data) => {
	console.log(data)
})
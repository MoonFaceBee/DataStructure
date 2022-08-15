import BinaryTree, {BinaryTreeNode} from "../binary_tree/index.ts";

class BinarySearchTree<T> extends BinaryTree<T> {
	constructor() {
		super();
	}

	private insertNodeHelper(data: T, node: BinaryTreeNode<T>) {
		if (data <= node.data) {
			if (node.left) {
				this.insertNodeHelper(data, node.left)
			} else {
				node.setLeft(data);
			}
		} else {
			if (node.right) {
				this.insertNodeHelper(data, node.right)
			} else {
				node.setRight(data)
			}
		}
	}

	insert(data: T): void {
		if (this.root === null) {
			this.root = new BinaryTreeNode<T>(this, data);
		} else {
			this.insertNodeHelper(data, this.root)
		}
	}

	private searchNodeHelper(data: T, node: BinaryTreeNode<T>): BinaryTreeNode<T> | undefined {
		if (data < node.data) {
			if (node.left) {
				return this.searchNodeHelper(data, node.left)
			} else {
				return undefined
			}
		}

		if (data > node.data) {
			if (node.right) {
				return this.searchNodeHelper(data, node.right)
			} else {
				return undefined
			}
		}

		return node
	}

	search(data: T): BinaryTreeNode<T> | undefined {
		if (this.root === null) {
			return undefined
		} else {
			return this.searchNodeHelper(data, this.root)
		}
	}
}

export default BinarySearchTree
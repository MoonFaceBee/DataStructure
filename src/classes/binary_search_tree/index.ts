import BinaryTree, {BinaryTreeNode} from "../binary_tree/index.ts";

class BinarySearchTree<T> extends BinaryTree<T> {
	constructor(rootData: T) {
		super(rootData);
	}

	private insertNodeHelper(node: BinaryTreeNode<T>) {
		if (node < node.tree.root) {
			node.tree.root.left.setLeft(node)
		}
	}

	insertNode(node: BinaryTreeNode<T>): void {
		this.insertNodeHelper(node)
	}
}

export default BinarySearchTree

const bst = new BinarySearchTree(1)
bst.insertNode(5)
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
}

export default BinarySearchTree

const bst = new BinarySearchTree<number>();
bst.insert(8)
bst.insert(2)
bst.insert(10)
bst.insert(5)
bst.insert(1)

console.log(bst.root.data)
console.log(bst.root.left.data)
console.log(bst.root.right.data)
console.log(bst.root.left.right.data)
console.log(bst.root.left.left.data)


bst.print();

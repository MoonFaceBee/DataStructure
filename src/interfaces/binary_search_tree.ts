import {BinaryTreeNode} from "../classes/binary_tree/index.ts";

export interface IBinarySearchTree<T> {
	insert(data: T): void
	search(data: T): BinaryTreeNode<T> | undefined
}
import BinaryTree, { BinaryTreeNode } from "../binary_tree/index.ts";
import { IBinarySearchTree } from "../../interfaces/binary_search_tree.ts";

class BinarySearchTree<T> extends BinaryTree<T>
  implements IBinarySearchTree<T> {
  private insertNodeHelper(data: T, node: BinaryTreeNode<T>) {
    if (data <= node.data) {
      if (node.left) {
        this.insertNodeHelper(data, node.left);
      } else {
        node.setLeft(data);
      }
    } else {
      if (node.right) {
        this.insertNodeHelper(data, node.right);
      } else {
        node.setRight(data);
      }
    }
  }

  insert(data: T): void {
    if (this.root === null) {
      this.root = new BinaryTreeNode<T>(this, data);
    } else {
      this.insertNodeHelper(data, this.root);
    }
  }

  private searchNodeHelper(
    data: T,
    node: BinaryTreeNode<T>,
  ): BinaryTreeNode<T> | undefined {
    if (data < node.data) {
      if (node.left) {
        return this.searchNodeHelper(data, node.left);
      } else {
        return undefined;
      }
    }

    if (data > node.data) {
      if (node.right) {
        return this.searchNodeHelper(data, node.right);
      } else {
        return undefined;
      }
    }

    return node;
  }

  search(data: T): BinaryTreeNode<T> | undefined {
    if (this.root === null) {
      return undefined;
    } else {
      return this.searchNodeHelper(data, this.root);
    }
  }

  inOrderSuccessor(data: T, node: BinaryTreeNode<T>): BinaryTreeNode<T> | null {
    if (node === null || data === null) {
      return null;
    }

    let temp = null;

    while (node !== null) {
      if (node.data <= data) {
        node = node.right;
      } else {
        temp = node;
        node = node.left;
      }
    }

    return temp;
  }

  private deleteNodeHelper(data: T, node: BinaryTreeNode<T> | null): void {
    if (node.data) {
			if (data === node.data) {
				if (node.height === 0) {
					node = null;
				}
			} else if (data > node.data) {
				this.deleteNodeHelper(data, node.right);
			} else if (data < node.data) {
				this.deleteNodeHelper(data, node.left);
			}
		} else {
			return
		}
  }

  delete(data: T): void {
    this.deleteNodeHelper(data, this.root);
  }
}

export default BinarySearchTree;

const t = new BinarySearchTree();

t.insert(8);
t.insert(3);
t.insert(10);
// t.insert(1);
// t.insert(6);
// t.insert(4);

t.delete(3);

console.log(t);

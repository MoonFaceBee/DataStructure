import BinaryTree, { BinaryTreeNode } from "../binary_tree/index.ts";
import { IBinarySearchTree } from "../../interfaces/binary_search_tree.ts";

class BinarySearchTree<T> extends BinaryTree<T>
  implements IBinarySearchTree<T> {
  constructor() {
    super();
  }

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
    if (data === node?.data) {
      if (node.right && !node.left) {
        node = node.right;
      } else if (!node.right && node.left) {
        node = node.left;
      } else if (node.right && node.left) {
        const inorderSuccessor = this.inOrderSuccessor(data, node);
        if (inorderSuccessor) {
          data = inorderSuccessor.data;
          this.delete(node.right.data);
          //todo: data doesnt change
        } else {
          return;
        }
      } else {
        node = null;
      }
    }

    if (node && data > node.data && node.right) {
      if (data === node.right.data && node.right.height === 0) {
        node.right = null;
      } else if (data === node.right.data && node.right.height > 0) {
        if (node.right.right && !node.right.left) {
          node.right = node.right.right;
        } else if (!node.right.right && node.right.left) {
          node.right = node.right.left;
        } else {
          //both right and left
        }
      } else {
        this.deleteNodeHelper(data, node.right);
      }
    }

    if (node && data < node.data && node.left) {
      if (data === node.left.data && node.left.height === 0) {
        node.left = null;
      } else if (data === node.left.data && node.left.height > 0) {
        if (node.left.right && !node.left.left) {
          node.left = node.left.right;
        } else if (!node.left.right && node.left.left) {
          node.left = node.left.left;
        } else {
          //both right and left
        }
      } else {
        this.deleteNodeHelper(data, node.left);
      }
    }
  }

  delete(data: T): void {
    this.deleteNodeHelper(data, this.root);
  }
}

export default BinarySearchTree;

const t = new BinarySearchTree();

t.insert(3);
t.insert(4);
t.insert(6);
t.insert(2);
t.insert(8);
t.insert(1);
t.insert(9);

t.delete(3);

console.log(t);

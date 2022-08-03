class TreeNode<T> {
  data: T;
  children: TreeNode<T>[] = [];

  constructor(data: T) {
    this.data = data;
  }

  addChild(data: T) {
    const child = new TreeNode<T>(data);
    this.children.push(child);
  }

	removeChild(index: number) {
		this.children.splice(index, 1)
	}
}

class Tree<T> {
  root: TreeNode<T>;

  constructor(rootData: T) {
    this.root = new TreeNode<T>(rootData);
  }
}

const t = new Tree(5);
t.root.addChild(13);
t.root.addChild(7);
t.root.children[0].addChild(5);
t.root.children[0].addChild(4);

t.root.children[0].removeChild(0);

console.log(JSON.stringify(t, null, "\t"));

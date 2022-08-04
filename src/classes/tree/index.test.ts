import Tree from "./index.ts";

Deno.test('Add Child', () => {
	const myTree = new Tree(1)

	myTree.root.addChild(2)
	myTree.root.addChild(3)
	myTree.root.addChild(4)

	myTree.root.children[0].addChild(5)
	myTree.root.children[1].addChild(6)
	myTree.root.children[2].addChild(7)
})

//Add other functions
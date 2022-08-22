import {Graph, GraphNode} from "../../../classes/graph/index.ts";

function breadthFirstSearch<T>(start: GraphNode<T>, goal: GraphNode<T>): GraphNode<T>[] {
	if (start === goal) {
		return [start]
	}

	if (start.links.length === 0) {
		return []
	}

	let visited: GraphNode<T>[] = []
	let queue: GraphNode<T>[] = []

	const paths: Record<symbol, GraphNode<T>[]> = {};

	visited.push(start)
	queue.push(...start.links);

	start.links.forEach((link) => {
		paths[link.id] = [start];
	});

	while (queue.length > 0) {
		const node = queue.shift() as GraphNode<T>
		const path = [...paths[node.id], node];

		visited.push(node)

		if (node === goal) {
			return path;
		}

		const unvisitedNodes = node.links.filter((n) => !visited.includes(n) && !queue.includes(n))

		if (unvisitedNodes.length > 0) {
			queue.push(...unvisitedNodes);

			unvisitedNodes.forEach((n) => {
				paths[n.id] = path;
			});
		}
	}

	return []
}

export default breadthFirstSearch;


const n1 = new GraphNode(1);
const n2 = new GraphNode(2);
const n3 = new GraphNode(3);
const n4 = new GraphNode(4);
const n5 = new GraphNode(5);
const n6 = new GraphNode(6);
const n7 = new GraphNode(7);
const n8 = new GraphNode(8);
const n9 = new GraphNode(9);
const n10 = new GraphNode(10);
const n11 = new GraphNode(11);

n1.link(n2);
n1.link(n3);
n1.link(n4);

n2.link(n11);

n3.link(n4);

n4.link(n5);
n4.link(n6);

n5.link(n7);
n5.link(n8);
n5.link(n10);

n6.link(n7);

n8.link(n9);

n10.link(n9);

const graph = new Graph();
graph.add(n1);
graph.add(n2);
graph.add(n3);
graph.add(n4);
graph.add(n5);
graph.add(n6);
graph.add(n7);
graph.add(n8);
graph.add(n9);
graph.add(n10);
graph.add(n11);

const b = breadthFirstSearch(n1, n11)

console.log(b)
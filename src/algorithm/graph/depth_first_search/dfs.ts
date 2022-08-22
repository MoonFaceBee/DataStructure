import {GraphNode} from "../../../classes/graph/index.ts";

function depthFirstSearch<T>(start: GraphNode<T>, goal: GraphNode<T>): GraphNode<T>[] {
	if (start === goal) {
		return [start]
	}

	if (start.links.length === 0) {
		return []
	}

	let visited: GraphNode<T>[] = []
	let stack: GraphNode<T>[] = []

	visited.push(start)
	stack.push(...start.links);

	while (stack.length > 0) {
		const node = stack.pop() as GraphNode<T>
		visited.push(node)
		
		if (node === goal) {
			return visited
		}

		const unvisitedNodes = node.links.filter((n) => !visited.includes(n))
		
		if (unvisitedNodes.length > 0) {
			stack.push(...unvisitedNodes)
		}
	}

	return []
}

export default depthFirstSearch;
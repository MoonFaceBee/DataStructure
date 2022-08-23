import { GraphNode } from "../../../classes/graph/index.ts";

function breadthFirstSearch<T>(
  start: GraphNode<T>,
  goal: GraphNode<T>,
): GraphNode<T>[] {
  if (start === goal) {
    return [start];
  }

  if (start.links.length === 0) {
    return [];
  }

  let visited: GraphNode<T>[] = [];
  let queue: GraphNode<T>[] = [];

  const paths: Record<symbol, GraphNode<T>[]> = {};

  visited.push(start);
  queue.push(...start.links);

  start.links.forEach((link) => {
    paths[link.id] = [start];
  });

  while (queue.length > 0) {
    const node = queue.shift() as GraphNode<T>;
    const path = [...paths[node.id], node];

    visited.push(node);

    if (node === goal) {
      return path;
    }

    const unvisitedNodes = node.links.filter((n) =>
      !visited.includes(n) && !queue.includes(n)
    );

    if (unvisitedNodes.length > 0) {
      queue.push(...unvisitedNodes);

      unvisitedNodes.forEach((n) => {
        paths[n.id] = path;
      });
    }
  }

  return [];
}

export default breadthFirstSearch;

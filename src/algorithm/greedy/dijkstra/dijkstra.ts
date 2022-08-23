import { GraphNode } from "../../../classes/graph/index.ts";

function Dijkstra<T>(start: GraphNode<T>, goal: GraphNode<T>): GraphNode<T>[] {
  if (start === goal) {
    return [start];
  }

  if (start.links.length === 0) {
    return [];
  }

  const distances: Record<symbol, number> = {};
  const backlinks: Record<symbol, GraphNode<T>> = {};
  const queue: GraphNode<T>[] = [];
  const visited: GraphNode<T>[] = [];

  distances[start.id] = 0;
  queue.push(start);

  while (queue.length > 0) {
    const node = queue.shift() as GraphNode<T>;

    const unvisitedNodes = node.links.filter((n) => !visited.includes(n));

    for (const n of unvisitedNodes) {
      const dist = distances[node.id] + node.weights[n.id];

      if (dist < (distances[n.id] ?? Infinity)) {
        distances[n.id] = dist;
        backlinks[n.id] = node;
      }

      queue.push(n);
    }

    visited.push(node);
  }

  if (backlinks[goal.id]) {
    const path = [goal];

    while (true) {
      const prev = backlinks[path[0].id];

      if (prev) {
        path.unshift(prev);
      } else {
        break;
      }
    }

    return path;
  }

  return [];
}

export default Dijkstra;
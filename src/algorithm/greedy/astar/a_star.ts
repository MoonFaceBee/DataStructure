import { GraphNode } from "../../../classes/graph/index.ts";

function a_star<T>(start: GraphNode<T>, goal: GraphNode<T>): GraphNode<T>[] {
  if (start === goal) {
    return [start];
  }

  if (start.links.length === 0) {
    return [];
  }

  const visited: GraphNode<T>[] = [];
  const queue: GraphNode<T>[] = [];
  const path = [];

  queue.push(start);
  path.push(start);

  while (queue.length > 0) {
    const node = queue.shift() as GraphNode<T>;

    const unvisitedLinks = node.links.filter((n) => !visited.includes(n));

    const fs = unvisitedLinks.map((n) => {
      const g = node.weights[n.id];

      const h = Math.hypot(
        n.coords.x - goal.coords.x,
        n.coords.y - goal.coords.y,
      );

      return g + h;
    });

    const minFIndex = fs.indexOf(Math.min(...fs));

    const bestNode = unvisitedLinks[minFIndex];
    path.push(bestNode);

    if (bestNode === goal) {
      break;
    }

    queue.push(bestNode);
    visited.push(node);
  }

  return path;
}

export default a_star;

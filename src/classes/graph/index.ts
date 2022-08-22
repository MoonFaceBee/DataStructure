import { IGraph, IGraphNode } from "../../interfaces/graph.ts";
import LinkedList from "../linked_list/index.ts";

export class GraphNode<T> implements IGraphNode<T> {
  value: T;
  links: GraphNode<T>[] = [];

  constructor(value: T) {
    this.value = value;
  }

  link(node: GraphNode<T>, backlink = true): void {
    this.links.push(node);

    if (backlink) {
      node.links.push(this);
    }
  }

  unlink(node: GraphNode<T>, backlink = true): void {
    this.links = this.links.filter((n) => n !== node);

    if (backlink) {
      node.links = node.links.filter((n) => n !== this);
    }
  }

	linksTo(node: GraphNode<T>): boolean {
		return this.links.includes(node);
	}
}

export class Graph<T> implements IGraph<T> {
  nodes: GraphNode<T>[] = [];

  add(node: GraphNode<T>): void {
    this.nodes.push(node);
  }

  remove(node: GraphNode<T>, unlink = false): void {
    this.nodes = this.nodes.filter((n) => n !== node);

    if (unlink) {
      this.nodes.forEach((n) => {
        n.unlink(node);
      });
    }
  }

	adjacencyMatrix(): number[][] {
		const size = this.nodes.length

		const matrix = new Array(size).fill(null).map(() => new Array(size).fill(0))

		for (let i = 0; i < size; i++) {
			for (let j = 0; j < size; j++) {
				if (this.nodes[i].linksTo(this.nodes[j])) {
					matrix[i][j] = 1
				}
			}
		}

		return matrix
	}

	adjacencyList(): LinkedList<number>[] {
		const size = this.nodes.length
		const list: LinkedList<number>[] = []

		for (let i = 0; i < size; i++) {
			const ll = new LinkedList<number>()

			for (let j = 0; j < size; j++) {
				if (this.nodes[i].linksTo(this.nodes[j])) {
					ll.addToEnd(j)
				}
			}

			list.push(ll)
		}

		return list
	}
}

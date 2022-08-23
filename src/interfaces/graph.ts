import { GraphNode } from "../classes/graph/index.ts";
import LinkedList from "../classes/linked_list/index.ts";

export interface IGraphNode<T> {
  link(node: GraphNode<T>, backlink?: boolean): void;
  unlink(node: GraphNode<T>, backlink?: boolean): void;

  linksTo(node: GraphNode<T>): boolean;
}

export interface IGraph<T> {
  add(node: GraphNode<T>): void;
  remove(node: GraphNode<T>, unlink?: boolean): void;

  adjacencyMatrix(): number[][];
  adjacencyList(): LinkedList<number>[];
}

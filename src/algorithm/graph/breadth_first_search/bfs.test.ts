import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import { Graph, GraphNode } from "../../../classes/graph/index.ts";
import breadthFirstSearch from "./bfs.ts";

Deno.test("BFS Path Finding", () => {
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

  assertEquals(breadthFirstSearch(n1, n11), [n1, n2, n11]);
});

import { Graph, GraphNode } from "../../../classes/graph/index.ts";
import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import Dijkstra from "./dijkstra.ts";

Deno.test("Dijkstra Path Finding", () => {
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

  n1.link(n2, 5);
  n1.link(n3, 2);
  n1.link(n4, 3);

  n2.link(n11, 6);
  n3.link(n4, 10);

  n4.link(n5, 5);
  n4.link(n10, 1);

  n5.link(n7, 5);
  n5.link(n8, 3);
  n5.link(n6, 8);

  n6.link(n9, 1);
  n7.link(n9, 9);

  n8.link(n9, 1);

  n10.link(n7, 7);

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

  assertEquals(Dijkstra(n1, n9), [n1, n4, n5, n8, n9]);
});

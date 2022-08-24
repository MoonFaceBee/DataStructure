import { Graph, GraphNode } from "../../../classes/graph/index.ts";
import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import A_star from "./a_star.ts";

Deno.test("AStar Path Finding", () => {
  const n1 = new GraphNode(1, { x: 100, y: 300 });
  const n2 = new GraphNode(2, { x: 300, y: 150 });
  const n3 = new GraphNode(3, { x: 730, y: 650 });
  const n4 = new GraphNode(4, { x: 300, y: 330 });
  const n5 = new GraphNode(5, { x: 600, y: 300 });
  const n6 = new GraphNode(6, { x: 800, y: 450 });
  const n7 = new GraphNode(7, { x: 900, y: 190 });
  const n8 = new GraphNode(8, { x: 813, y: 280 });
  const n9 = new GraphNode(9, { x: 1200, y: 500 });
  const n10 = new GraphNode(10, { x: 450, y: 212 });
  const n11 = new GraphNode(11, { x: 600, y: 111 });

  n1.link(n2, 1);
  n1.link(n3, 1);
  n1.link(n4, 1);

  n2.link(n11, 1);
  n3.link(n4, 1);

  n4.link(n5, 1);
  n4.link(n10, 1);

  n5.link(n7, 1);
  n5.link(n8, 1);
  n5.link(n6, 1);

  n6.link(n9, 1);
  n7.link(n9, 1);

  n8.link(n9, 1);

  n10.link(n7, 1);

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

  assertEquals(A_star(n1, n9), [n1, n4, n5, n8, n9]);
});

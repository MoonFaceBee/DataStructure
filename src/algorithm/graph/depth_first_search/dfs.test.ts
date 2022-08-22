import {assertEquals} from "https://deno.land/std@0.148.0/testing/asserts.ts";
import depthFirstSearch from "./dfs.ts";
import {Graph, GraphNode} from "../../../classes/graph/index.ts";

Deno.test("DFS Path Finding", () => {
	const n1 = new GraphNode(1);
	const n2 = new GraphNode(2);
	const n3 = new GraphNode(3);
	const n4 = new GraphNode(4);

	n1.link(n2);
	n1.link(n3);
	n1.link(n4);
	n3.link(n4);

	const graph = new Graph();
	graph.add(n1);
	graph.add(n2);
	graph.add(n3);
	graph.add(n4);

	assertEquals(depthFirstSearch(n1, n3), [n1, n4, n3]);
	assertEquals(depthFirstSearch(n1, n4), [n1, n4]);
});
import IGraph from "../../interfaces/graph.ts";

class Graph<T> implements IGraph<T>{
	constructor(value: T) {
		this.value = value;
		this.adjacents = []
	}

	addVertex(value: T, adjacents: number[]) {
		//
	}
}

export default Graph;
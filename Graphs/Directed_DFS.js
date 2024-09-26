class Graph {
	constructor(x){
		this.V = x;
		this.adjList = new Array(x);
		for(let i=0;i<x;i++){
			this.adjList[i] = [];
		}
	}
	
	addEdge(u, v){
		this.adjList[u].push(v);
	}
	
	DFSUtil(src, adjList, visitedArray){
		visitedArray[src] = true;
		console.log(src);
		for(let i=0;i<adjList[src].length;i++){
			if(visitedArray[adjList[src][i]] == false){
				this.DFSUtil(adjList[src][i], adjList, visitedArray);
			}
		}
	}
	
	DFS(src){
		let visitedArray = new Array(this.V).fill(false);
		/* console.log("visitedArray",visitedArray) */;
		this.DFSUtil(src, this.adjList, visitedArray);
	}
	
	printList(){
		for(let i=0;i<this.adjList.length;i++){
			console.log(this.adjList[i]);
		}
	}
}



let graph = new Graph(4);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.addEdge(3, 3);

/* graph.printList(); */

graph.DFS(2);

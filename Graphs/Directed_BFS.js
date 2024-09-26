class Graph {
	constructor(v){
		this.V = v;
		this.adjList = new Array(v);
		
		for(let i=0;i<v;i++){
			this.adjList[i] = [];
		}
	}
	
	addEdge(u, v){
		this.adjList[u].push(v);
	}
	
	printAdjList(){
		for(let i=0;i<this.adjList.length;i++){
			console.log(`${i} --> ${this.adjList[i]}`)
		}
	}
	
	BFS(src){
		let visitedArr = new Array(this.V).fill(false);
		
		let queue = [];
		queue.push(src);
		
		while(queue.length){
			/* console.log("What's inside Queue...",queue) */;
			let ele = queue.shift();
			console.log(ele);
			visitedArr[ele] = true;
			
			for(let i=0;i<this.adjList[ele].length;i++){
			/* console.log("Elements inside..",this.adjList[ele][i]) */;
				if(visitedArr[this.adjList[ele][i]] == false){
					queue.push(this.adjList[ele][i]);
				}
			}
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


graph.printAdjList()

graph.BFS(2);

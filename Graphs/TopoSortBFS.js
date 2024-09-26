let adjList = [];
let V;
let indegree;
let topoSort = [];

function Graph(v){
	V=v;
	indegree = new Array(v).fill(0);
	for(let i=0;i<v;i++){
		adjList[i] = [];
	}
}

function addEdges(u, v){
	adjList[u].push(v);
}


function topologicalSortUsingBFS(){

// Get Indegree
	for(let i=0;i<V;i++){
		for(let j=0;j<adjList[i].length;j++){
			indegree[adjList[i][j]]++;
		}
	}
	
	let queue = [];
	for(let i=0;i<indegree.length;i++){
		if(indegree[i] == 0){
			queue.push(i);
		}
	}
	
	
	
	while(queue.length){
		let x = queue.shift();
		topoSort.push(x);
		
		for(let i=0;i<adjList[x].length;i++){
			if(--indegree[adjList[x][i]] == 0){
				queue.push(adjList[x][i]);
			}
		}
	}
	
	return topoSort;
}

Graph(6);
addEdges(5, 2);
addEdges(5, 0);
addEdges(4, 0);
addEdges(4, 1);
addEdges(2, 3);
addEdges(3, 1);

const result = topologicalSortUsingBFS();

console.log(result);

// Number of vertices in the graph 
let V = 5;

function minVertex(weight, visitedArr) 
{ 
	let min = Number.MAX_VALUE, min_index; 
	for (let v = 0; v < V; v++) 
		if (visitedArr[v] == false && weight[v] < min) 
			min = weight[v], min_index = v; 
	return min_index; 
} 


function printMST(parent, graph) 
{ 
	document.write("Edge 	 Weight" + "<br>"); 
	for (let i = 1; i < V; i++) 
		document.write(parent[i] + "  - " + i + "  " + graph[i][parent[i]] + "<br>"); 
} 


function primMST(graph) 
{ 
	let parent = []; 
	let weight = []; 
	let visitedArr = []; 

	for (let i = 0; i < V; i++) 
		weight[i] = Number.MAX_VALUE, visitedArr[i] = false; 

	weight[0] = 0; //We set as 0 so that it gets picked first
	parent[0] = -1; 

	for (let i = 0; i < V - 1; i++)
	{ 
		let u = minVertex(weight, visitedArr); 
		visitedArr[u] = true; 

		for (let v = 0; v < V; v++) 
			if (graph[u][v] && visitedArr[v] == false && graph[u][v] < weight[v]) 
				parent[v] = u, weight[v] = graph[u][v]; 
	} 

	printMST(parent, graph); 
} 

// Driver code
	
let graph = [ [ 0, 2, 0, 6, 0 ], 
[ 2, 0, 3, 8, 5 ], 
[ 0, 3, 0, 0, 7 ], 
[ 6, 8, 0, 0, 9 ], 
[ 0, 5, 7, 9, 0 ] ]; 

// Print the solution 
primMST(graph); 


let adjList = [];
let V;
let visitedArr;


function Graph(v) {
    V = v;
    visitedArr = new Array(v).fill(false);
    for (let i = 0; i < v; i++) {
        adjList[i] = [];
    }
}

function addEdge(u, v) {
    adjList[u].push(v);
}

function printList() {
    for (let i = 0; i < adjList.length; i++) {
        console.log(`${i} : ${adjList[i]}`);
    }
}


Graph(6);
addEdge(0, 1);
addEdge(0, 2);
addEdge(1, 3);
addEdge(1, 4);
addEdge(2, 3);
addEdge(2, 5);
addEdge(3, 4);
addEdge(3, 5);

printList();

function dfs(u, visited_Arr, stackArr){
    visited_Arr[u] = true;

    for(let i=0;i<adjList[u].length;i++){
        let ele = adjList[u][i];
        if(!visitedArr[ele]){
            dfs(ele, visitedArr, stackArr)
        }
    }
    stackArr.push(u+1);

}

function topoSort(){
let stack = [];
	for(let i=0;i<V;i++){
		if(!visitedArr[i]){
            dfs(i, visitedArr, stack)
        }
	}
	
	console.log(stack.reverse());
}


topoSort();



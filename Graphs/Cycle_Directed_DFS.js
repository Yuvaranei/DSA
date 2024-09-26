let adjList = [];
let V;
let visitedArr;


function Graph(v) {
    V = v;
    visitedArr = new Array(v).fill(false);
    pathVisitedArr = new Array(v).fill(false);
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
addEdge(1, 4);
addEdge(2, 3);
addEdge(2, 5);
addEdge(3, 1);
addEdge(3, 5);
addEdge(4, 3);

printList();


function dfs(u, visited_Arr, pathVisited_Arr){
    visited_Arr[u] = true;
    pathVisited_Arr[u] = true;

    for(let i=0;i<adjList[u].length;i++){
        let ele = adjList[u][i];

        if(!visitedArr[ele]){
            if(dfs(ele, visited_Arr, pathVisited_Arr) == true) return true;
        } else if(pathVisited_Arr[ele] ==  true){
            return true;
        }
    }

    pathVisited_Arr[u] = false;
    return false;
}

function checkCycle(){
    for(let i=0;i<V;i++){
        if(!visitedArr[i]){
            if(dfs(i, visitedArr, pathVisitedArr) == true) return true;
        }
    }
    return false;
}

const isCycleFound = checkCycle();

console.log("Is cycle exists ? ", isCycleFound);



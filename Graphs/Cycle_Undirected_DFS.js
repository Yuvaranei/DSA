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
    adjList[v].push(u);
}

function printList() {
    for (let i = 0; i < adjList.length; i++) {
        console.log(`${i} : ${adjList[i]}`);
    }
}


Graph(4);
addEdge(0, 1);
addEdge(1, 2);
/* addEdge(2, 0); */
addEdge(2, 3);

printList();

function isCycleFound(u, visited_Arr, parent) {
    
    visited_Arr[u] = true;


    for (let i = 0; i < adjList[u].length; i++) {
        let ele = adjList[u][i];
        console.log(`u: ${u} visitedArr: ${visited_Arr} parent: ${parent} ele: ${ele}`)
        if (!visitedArr[ele]) {
            if (isCycleFound(ele, visited_Arr, u) == true) {
                return true;
            }
        } else if (parent != ele) {
            return true;
        }

    }
    return false;
}

// City!Dre@m#25
//

1509

15091991
691010
6911


function findCycle() {
    for (let i = 0; i < V; i++) {
        if (!visitedArr[i] && isCycleFound(i, visitedArr, -1)) return true;
    }
    return false;
}

const result = findCycle();

console.log("Cycle exists...", result);

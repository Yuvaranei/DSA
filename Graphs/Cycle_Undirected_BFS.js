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
addEdge(2, 0);
addEdge(2, 3);

printList();

function isCycleFound(u) {

    let queue = [];

    queue.push(u);
    visitedArr[u] = true;

    let parentArr = new Array(V).fill(-1);

    while (queue.length) {
        let x = queue.shift();

        for (let i = 0; i < adjList[x].length; i++) {
            let ele = adjList[x][i];
            if (!visitedArr[ele]) {
                if (parentArr[ele] == -1) {
                    visitedArr[ele] = true;
                    queue.push(ele);
                    parentArr[ele] = u;
                }
            } else if (parentArr[ele] != u) {
                console.log("u => ", u, parentArr[ele]);
                return true;
            }

        }

    }
    return false;
}


function findCycle() {
    for (let i = 0; i < V; i++) {
        if (!visitedArr[i] && isCycleFound(i)) return true;
    }
    return false;
}

const result = findCycle();

console.log("Cycle exists...", result);

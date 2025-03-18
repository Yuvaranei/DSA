let A = 5;
let B = [   [0, 3, 4],
        [2, 3, 3] ,
        [0, 1, 9] ,
        [3, 4, 10] ,[1, 3, 8]  ] ;
let C = 4;

let adjList = new Map();

for(let i=0;i<B.length;i++){
    let [u, v, weight] = B[i];
    if(!adjList.has(u)) adjList.set(u, []);
    if(!adjList.has(v)) adjList.set(v, []);

    adjList.set(u, [...adjList.get(u), {[v]: weight}]);
    adjList.set(v, [...adjList.get(v), {[u]: weight}]);
}

function dijkstras(vertices, adjList, srcVertex){
    let distance = Array(vertices).fill(Infinity);
    let visited = new Set();
    distance[srcVertex] = 0;

    let nodes = Array.from({length: vertices}, (_, index) => index);

    while(nodes.length){
        nodes.sort((a,b) => distance[a] - distance[b]);
        let currNode = nodes.shift();
        visited.add(currNode);

        // if(distance[currNode] == Infinity) break;

        for(let neighbor of adjList.get(currNode)){
            let neighborNode = Object.keys(neighbor)[0];
            let neighborWeight = Object.values(neighbor)[0];
            if(!visited.has(neighborNode)){
                distance[neighborNode] = Math.min(distance[neighborNode], distance[currNode] + neighborWeight)
            }
        }
    }
    return distance;
}


const distance = dijkstras(A, adjList, C);
console.log(distance);
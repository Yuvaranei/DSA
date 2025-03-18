const A = 5; // Number of vertices
const B = [
    [0, 1, -1],
    [0, 2, 4],
    [1, 2, 3],
    [1, 3, 2],
    [1, 4, 2],
    [3, 2, 5],
    [3, 1, 1],
    [4, 3, -3]
]; // Edges: [source, destination, weight]
const C = 0; // Source vertex


function bellmanfords(vertices, edges, srcVertex){
    let distance = Array(vertices).fill(Infinity);
    distance[srcVertex] = 0;

    for(let i=0;i<vertices-1;i++){
        for(let [u,v,w] of B){
            distance[v] = Math.min(distance[v], distance[u]+w);
        }
    }

    return distance;
}

const distance = bellmanfords(A, B, C);
console.log(distance);
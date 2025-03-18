const graph = [
    [0, 3, Infinity, 7], // Distances from vertex 0
    [Infinity, 0, 1, 8], // Distances from vertex 1
    [4, Infinity, 0, Infinity], // Distances from vertex 2
    [Infinity, Infinity, 2, 0]  // Distances from vertex 3
];

function floydWarshall(mat){
    let N = mat.length;
    
    for(let k=0;k<N;k++){
        for(let i=0;i<N;i++){
            for(let j=0;j<N;j++){
                    mat[i][j] = Math.min(mat[i][j], mat[i][k] + mat[k][j]);
            }
        }
    }
    return mat;
}

const shortestPath = floydWarshall(graph);
console.log(shortestPath);
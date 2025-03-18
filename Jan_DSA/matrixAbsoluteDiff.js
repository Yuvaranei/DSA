// import getKruskalMST from './kruskals';
const getKruskalMST = require('./kruskals');

let A = 3;
let B = 3;
let C = [  [1, 5, 6], [10, 7, 2], [3, 6, 9]   ];


function matrixAndAbsoluteDifference(){

}

function getEdgesFromMatrix(mat){
    const edges = [];

    for(let i=0;i<A;i++){
        for(let j=0;j<B;j++){
            if(j+1 < B){
                let from = (B * i) + j;
                let to = (B * i) +( j+1);
                let weight = Math.abs(mat[i][j] - mat[i][j+1]);
                edges.push({from,to, weight});
            }

            if(i+1 < A){
                let from = (B * i) + j;
                let to = (B *( i+1)) + j;
                let weight = Math.abs(mat[i][j] - mat[i+1][j]);
                edges.push({from,to, weight});
            }
        }
    }
    return edges;
}

const edges = getEdgesFromMatrix(C);
const mst = getKruskalMST(edges);

const k = mst[mst.length - 1].weight;

console.log("k = ", k);

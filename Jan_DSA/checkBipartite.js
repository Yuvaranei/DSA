const A = 3;
const B = [ [0, 1], [0, 2], [1, 2] ];
// const A = 2;
// const B = [ [0, 1] ];

const col = Array(A).fill(-1);

let adjList = new Map();
for(let i=0;i<B.length;i++){
    const [u, v] = B[i];
    if(!adjList.has(u)) adjList.set(u, []);
    if(!adjList.has(v)) adjList.set(v, []);

    adjList.set(u, [...adjList.get(u),v]);
    adjList.set(v, [...adjList.get(v),u]);
}

function checkForBipartite(adjList, col, src){
    if(col[src] == -1) col[src] = 0;

    for(let nbr of adjList.get(src) || []){
        // console.log("nbr = ", nbr);
        if(col[nbr] == -1){
            col[nbr] = 1-col[src];
            if(checkForBipartite(adjList, col, nbr) == false){
                // console.log("returning false 1")
                return false;
            }
        } else{
            if(col[nbr] == col[src]){
                // console.log("returning false 2")
                return false;
            }
        }
    }
    return true;
}

// console.log("Adj list = ", adjList);
const ans = checkForBipartite(adjList, col, 0);
// console.log("Col = ", col);
console.log(ans);
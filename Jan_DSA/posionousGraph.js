let A = 2;
let B = [  [1, 2]];

 const col = Array(A+1).fill(-1);
 let adjList = new Map();
 let vertices = new Set();
 for(let i=0;i<B.length;i++){
     const [u, v] = B[i];
     vertices.add(u);
     vertices.add(v);

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

const isBipartite = checkForBipartite(adjList, col, B[0][0]);
// console.log(coloredGraph);

let odd = 0, even = 0;
for(let i=1;i<=A;i++){
    if(col[i] ==0) even++;
    if(col[i] ==1) odd++;
}

// console.log(odd);
// console.log(even)

const ans = isBipartite ? 2**odd + 2**even : 0;
console.log(ans);
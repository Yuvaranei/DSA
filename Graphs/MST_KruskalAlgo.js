class UnionFind {
    constructor(size) {
        this.parent = Array.from({length: size}, (_,index) => index);
        this.rank = Array(size).fill(0);
    }

    // Find operation with path compression
    find(node) {
      if(this.parent[node] != node){
          this.parent[node] = this.find(this.parent[node]);
      }
      return this.parent[node];
    }

    // Union operation with union by rank
    union(node1, node2) {
        let root1 = this.find(node1);
        let root2 = this.find(node2);
        
        if(root1 != root2){
            if(this.rank[root1] > this.rank[root2]){
                this.parent[root2] = root1;
            } else if(this.rank[root2] > this.rank[root1]){
                this.parent[root1] = root2;
            } else {
                this.parent[root2] = root1;
                this.rank[root1]++;
            }
            return true;
        }
        return false;
    }
}

function kruskalAlgorithm(vertices, edges) {
    edges.sort((a,b) => a[2] - b[2]);
    
    let mst = [];
    let totalWeight = 0;
    
    let unionSet = new UnionFind(vertices);
    
    for(let i=0;i<edges.length;i++){
        const [u, v, weight ] = edges[i];
        if(unionSet.union(u,v)){
            mst.push([u,v, weight]);
            totalWeight += weight;
        }
        if(mst.length == vertices-1){
            return {mst, totalWeight}
        }
    }
}

// Example usage
const vertices = 4; // Number of vertices
const edges = [
    [0, 1, 1],
    [0, 2, 4],
    [1, 2, 3],
    [1, 3, 2],
    [2, 3, 5]
];

const result = kruskalAlgorithm(vertices, edges);
console.log("MST Edges:", result.mst);
console.log("Total Weight:", result.totalWeight);


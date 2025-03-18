// const edges = [
//     { from: 0, to: 1, weight: 4 },
//     { from: 0, to: 2, weight: 3 },
//     { from: 1, to: 2, weight: 1 },
//     { from: 1, to: 3, weight: 2 },
//     { from: 2, to: 3, weight: 4 },
// ];

const edges = [
    { from: 'A', to: 'B', weight: 4 },
    { from: 'A', to: 'C', weight: 3 },
    { from: 'B', to: 'C', weight: 1 },
    { from: 'B', to: 'D', weight: 2 },
    { from: 'C', to: 'D', weight: 4 },
];

class UnionFind {
    constructor(vertices){
        this.parent = {};
        this.rank = {};

        for(const vertex of vertices){
            this.parent[vertex] = vertex;
            this.rank[vertex] = 0;
        }
    }

    find(node){
        if(this.parent[node] != node){
            this.parent[node] = this.find(this.parent[node]);
        }
        return this.parent[node];
    }

    union(node1, node2){
        const root1 = this.find(node1);
        const root2 = this.find(node2);

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

function getKruskalMST(edges){
    const sortedEdges = edges.sort((a, b) => a.weight - b.weight);

    let vertices = new Set();
    for(const {from, to} of edges){
        vertices.add(from);
        vertices.add(to);
    }

    const MST = [];

    const unionFind = new UnionFind(Array.from(vertices));
    for(let {from, to, weight} of sortedEdges){
        if(unionFind.union(from, to)){
            MST.push({from, to, weight});
        }
    }
    return MST;
}

const ans = getKruskalMST(edges);
console.log(ans);

module.exports = getKruskalMST;
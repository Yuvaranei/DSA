const graph = {
    0: [{ to: 1, weight: 4 }, { to: 2, weight: 3 }],
    1: [{ to: 0, weight: 4 }, { to: 2, weight: 1 }, { to: 3, weight: 2 }],
    2: [{ to: 0, weight: 3 }, { to: 1, weight: 1 }, { to: 3, weight: 4 }],
    3: [{ to: 1, weight: 2 }, { to: 2, weight: 4 }],
};

function getMST(node){
    let visited = new Set();
    let queue = [{from: null, to: node, weight: 0}];
    let MST = [];
    
    while(queue.length){
        queue.sort((a, b) => a.weight - b.weight);
        let {from, to, weight} = queue.shift();

        if(visited.has(to)) continue;
        visited.add(to);
        if(from !=null) MST.push({from, to, weight});

        for(let neighbor of graph[to]){
            if(!visited.has(neighbor.to)){
                queue.push({from: to, to: neighbor.to, weight: neighbor.weight});
            }
        }
    }
    return MST;
}

let ans =  getMST(0);
console.log("Ans = ", ans);
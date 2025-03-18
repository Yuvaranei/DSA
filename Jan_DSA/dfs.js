function dfs(node, visitedNodes, ans){
    if(visitedNodes.has(node)) return;
    
    visitedNodes.add(node);
    ans.push(node);
    
    for(let neighbour of graph[node]){
        dfs(neighbour, visitedNodes, ans);
    }
    return ans;
}

const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: []
};

const visitedNodes = new Set();
const ans = [];
console.log(dfs("A", visitedNodes, ans));



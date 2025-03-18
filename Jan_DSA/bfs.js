function bfs(node, visitedNodes, ans){
    let queue = [];
    queue.push(node);

    while(queue.length){
        let extractedNode = queue.shift();

        if(!visitedNodes.has(extractedNode)){
            ans.push(extractedNode);
            visitedNodes.add(extractedNode);

            for(let neighbor of graph[extractedNode]){
                if(!visitedNodes[neighbor]){
                    queue.push(neighbor);
                }
            }
        }
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
console.log(bfs("A", visitedNodes, ans));



let A = 8,
 B = 8,
 C = 1,
 D = 1,
 E = 8,
 F = 8;

 function isValid(newi, newj){
    return (newi >= 1 && newj >=1 && newi <=A && newj <= B);
 }

 function getMoveCount(C, D, steps){
    let queue = [];
    let directions = [[-2,-1],[-2, 1],[-1, -2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
    let visited = new Set();

    queue.push([C,D,steps]);
    visited.add(`${C},${D}`);

    while(queue.length){
        const [i,j,step] = queue.shift();

        if(i==E && j==F) return step;

        for(let [x,y] of directions){
            let newi = i+x;
            let newj = j+y;

            if(isValid(newi, newj) && !visited.has(`${newi},${newj}`)){
                queue.push([newi, newj, step+1]);
                visited.add(`${newi},${newj}`);
            }
        }
    }
    return -1;
 }

 const moves = getMoveCount(C, D, 0);
 console.log(moves);
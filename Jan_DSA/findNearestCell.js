const A = [
    [0, 0, 0, 1],
    [0, 0, 1, 1] ,
    [0, 1, 1, 0]
  ];

  function getNearestCell(A){
    const N = A.length;
    const M = A[0].length;
    const distance = Array.from({length: N}, () => Array(M).fill(-1));

    let queue = [];
    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            if(A[i][j] == 1){
                queue.push([i,j,-1]);
            }
        }
    }

    while(queue.length){
        let [i, j, d] = queue.shift();
        if(distance[i][j] == -1){
            distance[i][j] = d+1;
        }

        if(j-1>=0 && distance[i][j-1] == -1) queue.push([i,j-1, d+1]);
        if(j+1 < M && distance[i][j+1] == -1) queue.push([i,j+1, d+1]);
        if(i-1>=0 && distance[i-1][j] == -1) queue.push([i-1,j,d+1]);
        if(i+1 < N && distance[i+1][j] == -1) queue.push([i+1, j, d+1]);
    }
    
    return distance;
  }

const nearestCell = getNearestCell(A);
console.log(nearestCell);
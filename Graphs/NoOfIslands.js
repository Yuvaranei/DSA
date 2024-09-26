let mat =  [[ 1, 1, 0, 0, 0 ],
            [ 0, 1, 0, 0, 1 ],
            [ 1, 0, 0, 1, 1 ],
            [ 0, 0, 0, 0, 0 ],
            [ 1, 0, 1, 0, 1 ] ];


let count = 0;


function bfs(row, col, visited_Mat, grid_mat){
    let n = grid_mat.length;
    let m = grid_mat[0].length;

    let queue = [];

    visited_Mat[row][col] = true;

    queue.push({first: row, second: col});

    while(queue.length){
        let cell = queue.shift();

        let first = cell.first;
        let second = cell.second;

        for(let delRow = -1;delRow<=1;delRow++){
            for(let delCol = -1; delCol<=1;delCol++){
                let nrow = first + delRow;
                let ncol = second + delCol;

                if(nrow>=0 && nrow<n && ncol >=0 && ncol < m 
                    && !visited_Mat[nrow][ncol]
                    && grid_mat[nrow][ncol] == 1){
                        visited_Mat[nrow][ncol] = true;
                        queue.push({first: nrow, second: ncol});
                    }
            }
        }

    }
 
}


function countIslands(){
    let n = mat.length;
    let m = mat[0].length;

    let visitedMatrix = [];
    for(let i=0;i<n;i++){
        visitedMatrix.push(new Array(m).fill(false));
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(!visitedMatrix[i][j] && mat[i][j] == 1){
                count++;
                bfs(i, j, visitedMatrix, mat);
            }
        }
    }
}

countIslands();

console.log('Number of Islands = ',count);
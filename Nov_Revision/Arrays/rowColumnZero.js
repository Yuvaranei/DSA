function rowColumnZero(mat){
    let N = mat.length;
    let M = mat[0].length;

    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            if(mat[i][j] == 0){
                let x=i;
                for(let y=0;y<M;y++){
                    if(mat[x][y] != 0){
                        mat[x][y] = -1;
                    }
                }

                let y = j;
                for(let x=0;x<N;x++){
                    if(mat[x][y] != 0){
                        mat[x][y] = -1;
                    }
                }
            }
        }
    }

    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            if(mat[i][j] == -1){
                mat[i][j] = 0;
            }
        }
    }

    return mat;
}

// const arr = [[1,2,3,4],[5,6,7,0],[9,2,0,4]];
const arr = [[1,2,0,3],[8,9,5,10],[7,6,0,11]];
console.log(rowColumnZero(arr));
function magicMatrices(matrix) {

    let initialSum = 0;
    matrix[0].map(x => initialSum += x);

    let sumRows = matrix.map(function(row){
        return row.reduce(function(a,b){
            return a + b;
        });
    });

    for(let sum of sumRows){
        if(sum !== initialSum){
            return false;
        }
    }

    let sumColumns = matrix.reduce(function(a, b){
        return a.map(function(v,i){
            return v + b[i];
        });
    });

    for(let sum of sumColumns){
        if(sum !== initialSum){
            return false;
        }
    }

    return true;
}

console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));

function solve(n, k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        let index = i - k;
        if(index < 0) index = 0;
        for (let j = index; j < k + index; j++) {
            if(j <= arr.length - 1) 
                sum += arr[j];
        }
        arr.push(sum);
    }

    return arr.join(' ');
}

console.log(solve(6,3));
console.log(solve(8,2));
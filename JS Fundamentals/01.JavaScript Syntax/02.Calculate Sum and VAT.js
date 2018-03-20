function SumAndVAT(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let vat = sum * 0.2;
    let totalSum = sum + vat;
    console.log(sum);
    console.log(vat);
    console.log(totalSum);
}

SumAndVAT([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);
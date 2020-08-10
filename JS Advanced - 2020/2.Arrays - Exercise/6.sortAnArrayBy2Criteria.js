function solve(inputArr) {
    return inputArr
        .sort((a,b) => a.length - b.length || a.localeCompare(b))
        .join('\n');
}
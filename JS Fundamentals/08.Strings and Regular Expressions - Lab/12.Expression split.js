function expressionSplit(string){
    let tokens = string.split(/[(),;.\s]+/g);
    console.log(tokens.join('\n'));
}

expressionSplit('let sum = 4 * 4,b = "wow";');
expressionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');
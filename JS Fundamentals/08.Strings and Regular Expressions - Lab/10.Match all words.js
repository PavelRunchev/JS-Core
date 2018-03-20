function matchAllWords(string){
    let words = string.split(/\W+/g).filter(el => el !== "");
    console.log(words.join("|"));
}


matchAllWords('A #%^ lo^#^t of@%*symbols(@i@%~n~)`this......sentence...123456789*&%#0:"">>?:{{!@#@@#$%The+_)(*&^%$#@!End.');
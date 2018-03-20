function palindrome(word){
    "use strict";
    let isPalindrome = true;
    for (let i = 0; i < word.length / 2; i++) {
        if(word[i] !== word[word.length - 1 - i]){
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}

console.log(palindrome('unitinu'));
//test for judge
(function extension() {

    String.prototype.ensureStart = function (str) {
        if (!this.toString().startsWith(str)) {
             return str + this.toString();
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.toString().endsWith(str)) {
           return this.toString() + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.toString().length === 0
    };

    String.prototype.truncate = function (n) {
        let newStr = this.toString();
        if(this.toString().length > n){
            if(n < 4){
                newStr = ".".repeat(n);
            }else{
                let index = this.toString().substring(0, n - 2).lastIndexOf(" ");
                if(index !== -1){
                    newStr = this.toString().substring(0, index) + "...";
                }else{
                    newStr = this.toString().substring(0, n - 3) + "...";
                }
            }
        }

        return newStr;
    };

    String.format = function (str, ...params) {
        let newStr = str;
        for(let i = 0; i < params.length; i++){
            newStr = newStr.replace(`{${i}}`, params[i]);
        }

        return newStr;
    };
})();

//test solution
let myString = (function extension() {
    let myStr = "";
    String.prototype.add = function (str) {
        return myStr = str;
    };

    String.prototype.ensureStart = function (str) {
        if (!myStr.startsWith(str)) {
            return myStr = str + myStr;
        }
        return myStr;
    };

    String.prototype.ensureEnd = function (str) {
        if (!myStr.endsWith(str)) {
            return myStr = myStr + str;
        }
        return myStr;
    };

    String.prototype.isEmpty = function () {
        return myStr.length === 0
    };

    String.prototype.truncate = function (n) {
        let newStr = myStr;
        if(myStr.length > n){
            if(n < 4){
                newStr = ".".repeat(n);
            }else{
                let index = myStr.substring(0, n - 2).lastIndexOf(" ");
                if(index !== -1){
                    newStr = myStr.substring(0, index) + "...";
                }else{
                    newStr = myStr.substring(0, n - 3) + "...";
                }
            }
        }

        return myStr = newStr;
    };

    String.prototype.format = function (str, ...params) {
        let newStr = str;
        for(let i = 0; i < params.length; i++){
            newStr = newStr.replace(`{${i}}`, params[i]);
        }

        return myStr = newStr;
    };

    return myStr;
})();

myString.add('the quick brown fox jumps over the lazy dog');
console.log(myString.truncate(10)); // the...
myString.add('the quick brown fox jumps over the lazy dog');
console.log(myString.truncate(12)); //the quick...
myString.add('the quick brown fox jumps over the lazy dog');
console.log(myString.truncate(43)); //the quick brown fox jumps over the lazy dog
console.log(myString.format('jumps {0} {1}', 'dog')); //jumps dog {1}
console.log(myString.format('The {0} {1} fox', 'quick', 'brown')); //The quick brown fox






(function stringExtension() {
    String.prototype.ensureStart = function(str) {
        if(!this.startsWith(str)) 
            return str + this;
        return this.toString();
    };

    String.prototype.ensureEnd = function(str) {
        if(!this.endsWith(str)) 
            return this + str;
        return this.toString();
    };

    String.prototype.isEmpty = function() {
        if(this.length === 0)
            return true;
        return false;
    };

    String.prototype.truncate = function(n) {
        let str = this.toString();
        if(str.length <= n)
            return str.toString();
        if(n < 4)
            return str = '.'.repeat(n);


        //if n equal to str truncate n - 1!!!
        //because maybe has space end to str!!!
        str = str.substring(0, n - 1);
        let index = str.lastIndexOf(' ');
        return index > 0 
            ? str.substring(0, index) + '...'
            : str.substring(0, n-3) + '...';
    };
    
    String.format = function(str, ...params) {
        let i = 0;
        while(params.length > i) {
            str = str.replace(`{${i}}`, params[i]);
            i++;
        }

        return str;
    };
})();

// let str = 'my string';
// console.log(str = str.ensureStart('my'));
// console.log(str = str.ensureStart('hello '));
// console.log(str = str.truncate(16));
// console.log(str = str.truncate(14));
// console.log(str = str.truncate(8));
// console.log(str = str.truncate(4));
// console.log(str = str.truncate(2));
// console.log(str = String.format('The {0} {1} fox', 'quick', 'brown'));
// console.log(str = String.format('jumps {0} {1}', 'dog'));

let t = 'the quick brown fox jumps over the lazy dog';
console.log(t = t.truncate(45));

(function stringExtension() {
    String.prototype.ensureStart = function(str) {
        if(!this.startsWith(str))
            return str + this;

        return this.toString();
    }

    String.prototype.ensureEnd = function(str) {
        if(!this.endsWith(str))
            return this + str;

        return this.toString();
    }

    String.prototype.isEmpty = function() {
        if(this.length === 0)
            return true;

        return false;
    }

    String.prototype.truncate = function(n) {
        let str = this.toString();
        if(str.length <= n)
            return str.toString();
        
        if(n < 4)
            return str = '.'.repeat(n);

        str = str.substring(0, n - 2);
        let index = str.lastIndexOf(' ');
        if(index > 0)
            return str.substring(0, index) + '...';
        else 
            return str.substring(0, n - 3) + '...';
    };

    String.format = function(str, ...params) {
        let index = 0;
        while(params.length > index) {
            str = str.replace(`{${index}}`, params[index]);
            index++;
        }

        return str;
    }
})();
let str = 'the quick brown fox jumps over the lazy dog';

console.log(str.truncate(1));

//console.log(String.prototype.isEmpty());
//console.log(String.format('The {0} {1} fox', 'quick', 'brown'));
//console.log(String.format('jumps {0} {1}','dog'));
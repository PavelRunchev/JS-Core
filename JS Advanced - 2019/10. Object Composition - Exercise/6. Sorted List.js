function sorteedList() {
    return {
        base: [],
        size: 0,

        add: function(el) {
            this.base.push(el);
            this.sort();
            this.size++;
        },

        remove: function(index) {
            if(index < 0 || index > this.base.length)
                throw new Error('Invalid index!');

            if(this.base.length > 0) {
                const p = this.base.splice(index, 1);
                this.size--;
            }
        },

        get: function(index) {
            if(index < 0 || index > this.base.length)
                throw new Error('Invalid index!');

            return this.base[index];
        },

        sort: function() { this.base = this.base.sort((a, b) => a - b); }
    }
}

let l = sorteedList();
l.add(13);
l.add(20);
l.add(8);

l.remove(1);
console.log(l.size);
console.log(l.get(1));
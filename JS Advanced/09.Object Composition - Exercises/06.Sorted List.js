function sortedList() {
    return {
        array: [],
        size: 0,

        add: function (el) {
            this.array.push(el);
            this.size++;
            this.sort();
        },
        
        remove: function (index) {
            if(index > -1 && index < this.array.length) {
                // removed element of this index
                //this.array.splice(index, 1);
                delete this.array[index];
                this.size--;
                this.sort();
            }
        },

        get: function (index) {
            if(index > -1 && index < this.array.length){
                return this.array[index];
            }
        },

        toString: function () {
            return this.array.join(" ");
        },

        sort: function () {
            this.array.sort((a, b) => a - b);
        }
    }
}

let getSortedList = sortedList();

getSortedList.add(8);
getSortedList.add(4);
getSortedList.add(2);
getSortedList.add(6);
getSortedList.remove(1);
console.log(getSortedList.get(1)); // 6
console.log(getSortedList.size); // 3

console.log(getSortedList.toString()); //2 , 6, 8
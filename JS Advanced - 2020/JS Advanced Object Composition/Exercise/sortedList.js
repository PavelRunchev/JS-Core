function sortedList() {
    let collection = [];
    const instance = {
        add,
        remove,
        get,
        size: 0
    };
    
    function add(element) {
        collection.push(element);
        collection.sort(sorting);
        instance.size++;
        return instance;
    };

    function remove(index) {
        if(validate(index)) {
            const deleteIndex = collection.splice(index, 1);
            instance.size--;
            collection.sort(sorting);
            return instance;
        } 
    }

    function get(index) {
        if(validate(index)) 
            return collection[index];
    }

    function sorting(a, b) {
        return a - b;
    }

    function validate(index) {
        if(index < 0 || index >= collection.length)
            return false;
        return true;
    }

    return instance;
}
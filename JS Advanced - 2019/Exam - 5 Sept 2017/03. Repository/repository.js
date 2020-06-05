class Repository {
    constructor(props) {
        this.props = props;
        this.data = new Map();
        this.ID = 0;
    }
	
    get props() {
        return this._props;
    }

    set props(value) {
        this._props = value;
    }

    add(entity) {
        for (let key in this.props) {
           if(!entity.hasOwnProperty(key))
               throw new Error(`Property ${key} is missing from the entity!`);

           if(typeof(entity[key]) !== this.props[key])
               throw new TypeError(`Property ${key} is of incorrect type!`);
        }

        this.data.set(this.ID, entity);
        this.ID++;
        return this.ID - 1;
    }

    get(id) {
        if(!this.data.has(id))
            throw new Error(`Entity with id: ${id} does not exist!`);

        return this.data.get(id);
    }

    update(id, newEntity) {
        if(!this.data.has(id))
            throw new Error(`Entity with id: ${id} does not exist!`);

        for (let key in this.props) {
            if(!newEntity.hasOwnProperty(key))
                throw new Error(`Property ${key} is missing from the entity!`);
 
            if(typeof(newEntity[key]) !== this.props[key])
                throw new TypeError(`Property ${key} is of incorrect type!`);
        }

        this.data.set(id, newEntity);
    }

    del(id) {
        if(!this.data.has(id))
            throw new Error(`Entity with id: ${id} does not exist!`);

        this.data.delete(id);
    }

    get count() {
        return this.data.size;
    }
}


// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);

// Add two entities
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
};

let entity1 = {
    name: 'Valio',
    age: 19,
    birthday: new Date(1998, 0, 7)
};

try {
    console.log(repository.add(entity)); // Returns 0
    repository.update(0, entity1);
    console.log(repository.get(0));
    repository.del(0); 
    console.log(repository.count);
} catch(err) {
    console.log(err.message);
}




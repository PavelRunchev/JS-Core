
class Repository{
    constructor(props){
        this.props = props;
        this.data = new Map();
        this.id = 0;
    }

    get count(){
        return this.data.size;
    }

    add(entity){
        this._validated(entity);

        this.data.set(this.id, entity);
        return this.id++;
    }

    get(id){
        if(!this.data.has(id)){
            throw  new Error(`Entity with id: ${id} does not exist!`);
        }
        return this.data.get(id);
    }

    update(id, newEntity){
        this._validated(newEntity);

        if(!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

        this.data.set(id, newEntity);
    }

    del(id){
        if(!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        this.data.delete(id);
    }

    _validated(entity){
        for(let key in this.props){
            if(!entity.hasOwnProperty(key)){
                throw  new Error(`Property ${key} is missing from the entity!`);
            }
            if(typeof entity[key] !== this.props[key]){
                throw new TypeError(`Property ${entity[key]} is of incorrect type!`);
            }
        }
    }
}




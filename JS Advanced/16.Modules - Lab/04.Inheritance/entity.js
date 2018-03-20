class Entity{
    constructor(name){
        if(new.target === Entity){
            throw new Error("This is abstract class Entity!Cannot make instance!")
        }

        this.name = name;
    }
}

module.exports = Entity;
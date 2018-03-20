function systemComponents(array){
    "use strict";
    let dataSystems = new Map();
    for (let element of array) {
        let [systemName, componentName, subcomponentName] = element.split(" | ");
        if(!dataSystems.has(systemName)){
            dataSystems.set(systemName, new Map());
        }
        if(!dataSystems.get(systemName).has(componentName)){
            dataSystems.get(systemName).set(componentName, []);
        }
        dataSystems.get(systemName).get(componentName).push(subcomponentName);
    }

    let keys = Array.from(dataSystems.keys()).sort((a,b) => {
        let componentsA = dataSystems.get(a).size;
        let componentsB = dataSystems.get(b).size;
        if(componentsA > componentsB){
            return -1;
        }else if(componentsA < componentsB){
            return 1;
        }
        return a.localeCompare(b);
    });
    for (let key of keys) {
        console.log(key);
        let innerKeys = [...dataSystems.get(key).keys()]
            .sort((suA,suB) => {
            return dataSystems.get(key).get(suB).length - dataSystems.get(key).get(suA).length;
            });
        for (let component of innerKeys) {
            console.log("|||" + component);
            for (let subElement of [...dataSystems.get(key).get(component)]) {
                console.log("||||||" + subElement);
            }
        }
    }
}


systemComponents(["SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submittion Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security"]);
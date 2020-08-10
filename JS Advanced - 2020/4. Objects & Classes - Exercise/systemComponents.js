function systemComponents(inputArr) {
    let systems = [];
    inputArr.forEach(el => {
        const [systemName, componentName, subcomponentName] = el.split(' | ');
        let systemExist = systems.find(s => s.name === systemName);
        if(systemExist) {
            let componentExist = systemExist.components.find(c => c.name === componentName);
            if(componentExist) {
                componentExist.subComponents.push(subcomponentName);
            } else {
                let newComponent = { name: componentName, subComponents: [] };
                newComponent.subComponents.push(subcomponentName);
                systemExist.components.push(newComponent);
            }
        } else {
            let newSystem = { name: systemName, components: [] };
            let newComponent = { name: componentName, subComponents: [] };
            newComponent.subComponents.push(subcomponentName);
            newSystem.components.push(newComponent);
            systems.push(newSystem);
        }
    });

    function sortSystems(a, b) {
        const result = b.components.length - a.components.length;
        if(result === 0)
            return a.name.localeCompare(b.name);
        return result;
    }

    return systems.sort(sortSystems)
        .map(s => {
            const allComponents = s.components
                .sort((a,b) => b.subComponents.length - a.subComponents.length)
                .map(c => {
                    const allSubComponents = c.subComponents
                        .map(sub => sub = `||||||${sub}`).join('\n');
                    return `|||${c.name}\n${allSubComponents}`;
                }).join('\n');
            return `${s.name}\n${allComponents}`;
        }).join('\n');
}

console.log(systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]));
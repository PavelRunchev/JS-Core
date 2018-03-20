function employeeData(array){
    let pattern = /^([A-Z][A-Za-z]*) - ([1-9][0-9]*) - ([A-Za-z0-9 -]+)$/;
    let result = [];
    for (let employee of array) {
        let match = pattern.exec(employee);
        if(match !== null){
           result.push(`Name: ${match[1]}`,
           `Position: ${match[3]}`,
           `Salary: ${match[2]}`);
        }
    }

    console.log(result.join('\n'));
}



employeeData(['Jonathan - 2000 - Manager',
    'Peter- 1000- Chuck',
    'George - 1000 - Team Leader']);
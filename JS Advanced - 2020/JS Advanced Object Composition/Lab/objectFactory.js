function objectFactory(input) {
    let objects = {};
    JSON.parse(input).forEach(obj => { for (let key in obj) objects[key] = obj[key]; });

    return objects;
}

console.log(objectFactory('[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]'));
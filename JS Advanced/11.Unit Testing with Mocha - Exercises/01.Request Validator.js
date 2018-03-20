function validateRequest(obj) {
    const validMethod = ['GET', "POST", 'DELETE', 'CONNECT'];
    const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    //verify method property
    if(!validMethod.includes(obj['method']) || obj.method === undefined){
        throw new Error("Invalid request header: Invalid Method");
    }

    let matchUri = /^([A-Za-z0-9.*]+)$/g.test(obj['uri']);
    //verify URI property
    if(!matchUri || obj['uri'] === "" || obj.uri === undefined){
        throw new Error("Invalid request header: Invalid URI");
    }

    //verify version property
    if(!validVersion.includes(obj['version']) || obj.version === undefined){
        throw new Error("Invalid request header: Invalid Version");
    }

    let matchMessage = /^([^<>"\\&']*)$/g.test(obj['message']);

    //verify message property
    if(!matchMessage || obj.message === undefined){
        throw new Error("Invalid request header: Invalid Message");
    }

    return obj
}

console.log(validateRequest({
    method: 'POST',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

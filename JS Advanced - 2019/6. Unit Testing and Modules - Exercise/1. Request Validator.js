function requestValidator(obj) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const http = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messages = /^([^<>"\\&']*)$/g;
    const urls = /^([A-Za-z0-9.*]+)$/g;

    if(!methods.includes(obj['method']) || obj['method'] === undefined) 
        throw new Error('Invalid request header: Invalid Method');
    
    if(!urls.test(obj.uri) || obj.uri === '' || obj.uri === undefined)
        throw new Error('Invalid request header: Invalid URI');

    if(!http.includes(obj.version) || obj.version === undefined)
        throw new Error('Invalid request header: Invalid Version');
    
    if(!messages.test(obj.message) || obj.message === undefined)
        throw new Error('Invalid request header: Invalid Message');

    return obj;
}

console.log(requestValidator({
    method: 'POST',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
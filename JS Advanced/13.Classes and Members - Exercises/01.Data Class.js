
class Request{
    constructor(method, uri, version, message){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

let r = new Request("did", "www.abv.bg", "HTP", "empty");
console.log(r);
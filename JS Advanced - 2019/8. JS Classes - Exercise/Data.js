class Request {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }

    toString () {
        return `{ method: \'${this.method}\',\n  uri: \'${this.uri}\',\n  version: \'${this.version}\',\n  message: \'${this.message}\',\n  response: ${this.response},\n  fulfilled: ${this.fulfilled} }`;
    }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData.toString());


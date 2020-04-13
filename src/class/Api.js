export default class Api {
    baseUrl;
    requestHeader = new Headers();

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    addHeader(key, value) {
        this.requestHeader.append(key, value);
    }

    doRequest(endpoint, body, method) {
        let fetchArgs = {
            method: method ? method : 'GET',
            headers: this.requestHeader,
        };

        // Maybe has body.
        if (body) {
            fetchArgs.body = body;
        }

        return fetch(this.baseUrl + endpoint, fetchArgs)
    }
}
export default class GithubApi {
    userName = 'rendy44';
    personalAccessToken = '86d14cc4135ded8d5eb24a3f65dabf0867485ea3';
    endPoint = 'https://api.github.com/graphql';

    getHeaders() {
        let requestHeaders = new Headers();
        requestHeaders.append("Authorization", "bearer " + this.personalAccessToken);
        requestHeaders.append("Content-Type", "application/json");

        return requestHeaders;
    }

    doFetch(bodyParam) {
        let requestOptions = {
            method: 'POST',
            headers: this.getHeaders(),
            body: bodyParam,
            redirect: 'follow'
        };

        return fetch(this.endPoint, requestOptions)
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));
    }

    getPinnedRepos() {
        return this.doFetch(JSON.stringify({
            query: "{\n  repositoryOwner(login: \"" + this.userName + "\") {\n    ... on User {\n      pinnedRepositories(first:4) {\n        edges {\n          node {\n              forkCount\n            name\n            description\n            url\n            languages(first:5){\n                edges{\n                    node{\n                        id\n                        color\n                        name\n                    }\n                }\n            }\n          }\n        }\n      }\n    }\n  }\n}",
            variables: {}
        }))
    }
}
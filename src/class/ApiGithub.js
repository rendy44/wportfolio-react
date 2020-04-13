export default class ApiGithub {
    userName = 'rendy44';
    personalAccessToken = '';
    endPoint = 'https://api.github.com/graphql';

    constructor(userName, personalAccessToken) {
        this.userName = userName;
        this.personalAccessToken = personalAccessToken;
    }

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
    }

    getPinnedRepos() {
        return this.doFetch(JSON.stringify({
            query: "{\n  repositoryOwner(login: \"" + this.userName + "\") {\n    ... on User {\n      pinnedRepositories(first:4) {\n        edges {\n          node {\n              forkCount\n            name\n            description\n            url\n            languages(first:5){\n                edges{\n                    node{\n                        id\n                        color\n                        name\n                    }\n                }\n            }\n          }\n        }\n      }\n    }\n  }\n}",
            variables: {}
        }))
    }

    getActivity() {
        return this.doFetch(JSON.stringify({
            query: "{\n    user(login: \"" + this.userName + "\") {\n              contributionsCollection {\n                  startedAt\n                  endedAt\n                contributionCalendar {\n                  totalContributions\n                }\n              }\n            }\n          }",
            variables: {}
        }))
    }
}
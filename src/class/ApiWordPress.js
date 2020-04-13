import Api from "./Api";

export default class ApiWordPress extends Api {
    constructor(baseUrl) {
        super(baseUrl);

    }

    getLatestPosts() {
        return this.doRequest('wp-json/public/recent_posts')
    }
}
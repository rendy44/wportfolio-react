import Api from "./Api";

export default class ApiWordPress extends Api {

    getLatestPosts() {
        return this.doRequest('wp-json/public/recent_posts')
    }
}
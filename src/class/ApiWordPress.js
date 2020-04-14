import Api from "./Api";

export default class ApiWordPress extends Api {

    getLatestPosts() {
        return this.doRequest('wp-json/public/recent_posts');
    }

    getPostDetail(post_slug) {
        return this.doRequest('wp-json/public/post_detail?slug=' + post_slug);
    }
}
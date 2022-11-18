import axios from "axios";

class PostsService {
    public async getPosts() {
        return axios
            .get("http://localhost:3001/posts")
            .then((response) => response.data);
    }
}

const postsService = new PostsService();
export default postsService;

import axios from "axios";
import { IP_POSTS } from "../../../app/constants";

class PostsService {
  public async getPosts() {
    return axios
      .get(IP_POSTS)
      .then((response) => response.data)
      .catch((error) => console.log(error));
  }
  public async setPost(data) {
    return axios
      .post(IP_POSTS, data)
      .then((response) => response.data)
      .catch((error) => console.log(error));
  }
}

const postsService = new PostsService();
export default postsService;

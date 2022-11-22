import axios from "axios";
import { IP_POSTS } from "../../../app/constants";

class PostsService {
  public async getPosts() {
    return axios.get(IP_POSTS).then((response) => response.data);
  }
  public async postPost() {
    return axios.post(IP_POSTS);
  }
}

const postsService = new PostsService();
export default postsService;

import axios from "axios";
import { IP_POSTS } from "../../../app/constants";

class PostsService {
  public async getPosts() {
    return axios
      .get(IP_POSTS)
      .then((response) => response.data)
      .catch((error) => console.log("0_WWW: " + error));
  }
  public async setPost(data) {
    return axios
      .post(IP_POSTS, data)
      .then((response) => response.data)
      .catch((error) => console.log("1_WWW: " + error));
  }
  public async deletePost(postId: Number) {
    const postURL = "http://192.168.8.112:3001/posts/" + postId;
    console.log(postURL);
    return axios
      .delete(`${postURL}`)
      .then((response) => response.data)
      .catch((error) => console.error("2_WWW: " + error));
  }
}

const postsService = new PostsService();
export default postsService;

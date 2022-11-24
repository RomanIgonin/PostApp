import axios from "axios";
import { IP_POSTS } from "../../../core/constants";

class PostsService {
  public async getPosts() {
    return axios
      .get(IP_POSTS)
      .then((response) => response.data)
      .catch((error) => console.log("getPosts: " + error));
  }
  public async setPost(data: object) {
    return axios
      .post(IP_POSTS, data)
      .then((response) => response.data)
      .catch((error) => console.log("setPost: " + error));
  }
  public async deletePost(postId: string) {
    return axios
      .delete(IP_POSTS + "/" + postId)
      .then((response) => response.data)
      .catch((error) => console.error("deletePost: " + error));
  }
  public async updatePost(post: any) {
    return axios
      .patch(IP_POSTS + "/" + post.postId, {
        title: post.title,
        content: post.content,
      })
      .then((response) => response.data)
      .catch((error) => console.error("updatePost: " + error));
  }
}

const postsService = new PostsService();
export default postsService;

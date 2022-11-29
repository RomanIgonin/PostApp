import axios from "axios";
import { IP_POSTS } from "../../../core/constants";
import { Post } from "../store";

class PostsService {
  public async getPostService() {
    return axios
      .get(IP_POSTS)
      .then((response) => response.data)
      .catch((error) => console.error("getPosts: " + error));
  }
  public async setPostService(post: Post) {
    return axios
      .post(IP_POSTS, post)
      .then((response) => response.data)
      .catch((error) => console.error("setPost: " + error));
  }
  public async deletePostService(postId: string) {
    return axios
      .delete(IP_POSTS + "/" + postId)
      .then((response) => response.data)
      .catch((error) => console.error("deletePost: " + error));
  }
  public async updatePostService(post: any) {
    return axios
      .patch(IP_POSTS + "/" + post.postId, {
        title: post.title,
        content: post.content,
      })
      .then((response) => response.data)
      .catch((error) => console.error("updatePost: " + error));
  }
  public async updateReactionService(postId: string, reactionsNew: object) {
    return axios
      .patch(IP_POSTS + "/" + postId, {
        reactions: reactionsNew,
      })
      .then((response) => response.data)
      .catch((error) => console.error("updateReaction: " + error));
  }
}

const postsService = new PostsService();
export default postsService;

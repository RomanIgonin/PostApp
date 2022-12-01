import axios from "axios";
import { IP_POSTS } from "../../../core/constants";
import { Post, editPost, newReaction } from "../store";

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
      .delete(`${IP_POSTS}/${postId}`)
      .then((response) => response.data)
      .catch((error) => console.error("deletePost: " + error));
  }
  public async patchPostService(editPost: editPost) {
    return axios
      .patch(`${IP_POSTS}/${editPost.postId}`, {
        title: editPost.title,
        content: editPost.content,
      })
      .then((response) => response.data)
      .catch((error) => console.error("updatePost: " + error));
  }
  public async patchReactionService(newReaction: newReaction) {
    return axios
      .patch(`${IP_POSTS}/${newReaction.postId}`, {
        reactions: newReaction.reactionsNew,
      })
      .then((response) => response.data)
      .catch((error) => console.error("updateReaction: " + error));
  }
}

const postsService = new PostsService();
export default postsService;

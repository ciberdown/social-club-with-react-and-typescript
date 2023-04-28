import axios from "axios";
import Post from "../components/Interfaces";
class PostService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });
  async getPosts() {
    const response = await this.http.get("/posts");
    return response.data;
  }
  async removePost(userId: number) {
    const response = this.http.delete("/posts/" + userId);
    return response;
  }
  async addPost(post: Post) {
    const randomId = Math.floor(Math.random() * 10000);
    const newPost: Post = {
      id: randomId,
      userId: post.userId,
      title: post.title,
      body: post.body,
    };
    const response = this.http.post("/posts/" + post.userId, newPost);
    return response;
  }
}

import axios from "axios";

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
  }
  async addPost(userId: number, title: string, body: string) {
    const randomId = Math.floor(Math.random() * 10000);
    const post: { id: number; userId: number; title: string; body: string } = {
      id: randomId,
      userId: userId,
      title: title,
      body: body,
    };
    const response = this.http.post("/posts/" + userId, post);
    return response;
  }
}

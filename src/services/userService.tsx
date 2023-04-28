import axios from "axios";
import Post, { User, Address, Company } from "../components/Interfaces";

class UserService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });
  async getUsers() {
    const response = await this.http.get("posts");
    return response.data;
  }
  async addUser(user: User) {
    const randomId = Math.floor(Math.random() * 10000);
    const response = await this.http.post("/users", user);
    return response.data;
  }
  async removeUser(id: number) {
    const response = await this.http.delete("/users/" + id);
    return response.data;
  }
}

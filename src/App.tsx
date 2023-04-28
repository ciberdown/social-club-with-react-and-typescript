import { useEffect, useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import postService from "./services/postService";
import userService from "./services/userService";
import PostInterface, { User } from "./components/Interfaces";

function App() {
  const [postList, setPostList] = useState<PostInterface[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const posts:PostInterface[] = await postService.getPosts();
    setPostList(posts);
    const loadedUsers: User[] = await userService.getUsers();
    setUsers(loadedUsers);
    // console.log(loadedUsers);
    // console.log(posts)
  };
  const removePost = (id: number):void=>{
    const filterdPosts = postList.filter(post=>{
      return post.id !== id
    })
    setPostList(filterdPosts);
  }
  return (
    <div style={{fontFamily:'sans-serif'}} className="App">
      <PostList users={users} posts={postList} removePost={removePost}/>
    </div>
  );
}

export default App;

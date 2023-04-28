import PostInterface, { User } from "./Interfaces";
import Post from "./Post";
interface Props {
  users: User[];
  posts: PostInterface[];
  removePost: Function
}
export default function PostList({ posts, users, removePost }: Props) {
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id} style={{maxWidth:'500px'}}>
            <Post post={post} users={users} removePost={removePost}/>
          </div>
        );
      })}
    </>
  );
}

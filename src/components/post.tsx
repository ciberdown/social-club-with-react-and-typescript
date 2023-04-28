import { useEffect } from "react";
import PostInterface, { User } from "./Interfaces";
interface Props {
  users: User[];
  post: PostInterface;
  removePost: Function;
}
const style = {
  section: { backgroundColor: "grey", padding: "10px" },
  headerDiv: {
    display: "flex",
    padding: "1px",
    margin: "1px",
    alignItems: "center",
  },
  btn: { height: "20px", cursor: "pointer", margin: "10px" },
  hrSec: { paddingTop: "6px", margin: "0px", backgroundColor: "white" },
  name: { color: "white" },
  userName: { marginTop: "1px", paddingTop: "1px", color: "white" },
};
export default function Post({ users, post, removePost }: Props) {
  function findUserName(): User {
    const foundedUser: User[] = users.filter((user) => {
      return user.id === post.userId;
    });
    return foundedUser[0];
  }
  return (
    <section style={style.section}>
      <div className="header" style={style.headerDiv}>
        {
          <h1 style={style.name}>
            {users.length !== 0 && post !== undefined && findUserName().name}
          </h1>
        }
        <button
          className="delete"
          style={style.btn}
          onClick={() => removePost(post.id)}
        >
          *
        </button>
      </div>
      <h3 style={style.userName}>
        {users.length !== 0 && post !== undefined && findUserName().username}
      </h3>
      <hr />
      <div className="body">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
      <hr style={style.hrSec} />
    </section>
  );
}

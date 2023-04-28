import { useState } from 'react';
import './App.css';
import PostList from './components/PostList';

function App() {
  const [postList, setPostList] = useState([]);
  const [users, setUsers] = useState([])
  return (
    <div className="App">
      <PostList users={users} posts={postList}/>
    </div>
  );
}

export default App;

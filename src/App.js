import React from 'react';
import PostCreate from './PostCreate';
import PostLists from'./PostLists';

const App = () =>{
  return(
  <div>
  <h3>Microservice Blog - Page Under Development</h3>
  <PostCreate />
  <hr />
  <h1>Posts</h1>
  <PostLists />
  </div>);
};

export default App;

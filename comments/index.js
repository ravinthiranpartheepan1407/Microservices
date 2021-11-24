const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const commentsByPostsID = {}

app.get('/posts/:id/comments', (req, res)=>{
  res.send(commentsByPostsID[req.params.id] || []);
})

app.post('/posts/:id/comments', (req, res)=>{
  const commentId = randomBytes(4).toString('hex');
  const contents = req.body;

  const comments = commentsByPostsID[req.params.id] || [];

  comments.push({id: commentId, contents});

  commentsByPostsID[req.params.id] = comments;

  res.status(201).send(comments);
})

app.listen(4001, ()=>{
  console.log("server connected at port 4001")
})

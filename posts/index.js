const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const cors = require('cors');
const axios = require('axios')

const posts = {}

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res)=>{
  res.send(posts);
})

app.post('/posts', (req, res)=>{
  const id = randomBytes(4).toString('hex');
  const {title} = req.body;
  posts[id] = {
    id,
    title
  };
  axios.post('http://localhost:4005/events', {
    type: 'PostCreated',
    data:{
      id,

    }
  });
  res.status(201).send(posts[id]);
})

app.listen(4000, ()=>{
  console.log("Server connected at port 4000");
})

const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.post("/events", (req, res)=>{
  const event= req.body;

  axios.post('http://localhost:4000/events', event);
  axios.post('http://localhost:4001/events', event);
  axios.post('http://localhost:4002/events', event);

  res.send({Status: "OK"});
})

app.listen(4005, ()=>{
  console.log("Server connected at port 4005")
})

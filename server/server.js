const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('frontEnd'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
  app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
  });
  
  app.get('/skills', (req, res) => {
    res.sendFile(__dirname + '/skills.html');
  });
  
  app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/projects.html');
  });
  



const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('Server is running on port ${port}');
});
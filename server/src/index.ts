import express from 'express';
// import './index.css';

const app = express();

app.get('/', (req, res) => {
  res.send("[Message]: The app is working!")
});

app.listen(3001, () =>{
  console.log('[Message]: Running on port 3001...');
});
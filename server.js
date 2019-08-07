const express = require('express');

const postsRouter = require('./routes/posts-router.js');

const server = express();

server.use(express.json());

server.get('/api/posts', (req, res) => {
  const queryParameters = req.query;

  res.status(200).json(queryParameters);
});

server.use('/api/posts', postsRouter);

server.listen(8000, () => console.log('\nAPI running\n'));
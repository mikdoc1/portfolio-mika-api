const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');

async function runServer() {
  await require('./db').connect();
  server.use(cors());
  server.use(bodyParser.json());
  server.use('/api/v1/portfolios', require('./routes/portfolio'));
  server.use('/api/v1/blogs', require('./routes/blog'));

  server.get('', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
  });

  const PORT = parseInt(process.env.PORT, 10) || 3001;
  server.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log('Server ready on port:', PORT);
  });
}

runServer();

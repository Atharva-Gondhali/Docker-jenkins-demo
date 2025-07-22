const http = require('http');
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.end('Hello from Jenkins-Docker demo!');
}).listen(port, () =>
  console.log(`Server listening on port ${port}`)
);

const http = require('http');
const fs = require('fs/promises');

const port = 8080;

const readHTML = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, { encoding: 'utf8' });
    return data;
  } catch (err) {
    console.log(err);
  }
};

const respond = (response, filePath) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  readHTML(filePath).then((html) => {
    response.end(html);
  });
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;
  switch (path) {
    case '/':
      respond(res, 'index.html');
      break;
    case '/about':
      respond(res, 'about.html');
      break;
    case '/contact-me':
      respond(res, 'contact-me.html');
      break;
    default:
      respond(res, '404.html');
      return;
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
